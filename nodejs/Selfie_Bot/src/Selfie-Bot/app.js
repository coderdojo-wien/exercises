const { Bot, MemoryStorage, BotStateManager } = require('botbuilder');
const { BotFrameworkAdapter } = require('botbuilder-services');
const https = require("https");
const fs = require('fs');
const request = require('request');
const restify = require('restify');

const apiKey = "<ADD FACY API KEY HERE>"
const appId = "";
const appPassword = "";

// Create server
let server = restify.createServer();
server.listen(process.env.port || process.env.PORT || 3978, function () {
    console.log(`${server.name} listening to ${server.url}`);
});

const adapter = new BotFrameworkAdapter({ 
    appId: appId, 
    appPassword: appPassword 
});

server.post('/api/messages', adapter.listen());


function processImage(image_buffer) {

    return new Promise(function (resolve, reject) {
        var options = {
            hostname: 'westcentralus.api.cognitive.microsoft.com',
            path: '/face/v1.0/detect?returnFaceId=false&returnFaceLandmarks=false&returnFaceAttributes=age,gender,glasses,smile',
            method: 'POST',
            headers: {
                "Content-Type": "application/octet-stream",
                "Content-Length": image_buffer.length,
                "Ocp-Apim-Subscription-Key": apiKey
            }
        };

        var req = https.request(options, (res) => {

            if (res.statusCode == 200) {
                res.on('data', (d) => {
                    var jsonObject = JSON.parse(d);
                    resolve(jsonObject);
                });
            } else {
                console.log("error");
                reject("Error");
            }

        });

        req.on('error', (e) => {
            console.error(e);
        });

        req.write(image_buffer);
        req.end();
    });
}



function messageBuilder(gender, age, smile, glasses) {

    var str = "Du bist wahrscheinlich "

    if (gender == "male") {
        str += "ein Mann"
    } else {
        str += "eine Frau"
    }

    str += " und ca. " + parseInt(age) + " Jahre alt. "

    if (smile >= 0.25) {
        str += "Du lachst ein bisschen und ";
    } else if (smile >= 0.5) {
        str += "Du lachst sehr und ";
    } else {
        str += "Du lachst nicht und ";
    }

    if (glasses == "NoGlasses") {
        str += "hast keine Brillen auf.";
    } else {
        str += "hast eine Brille auf."
    }

    return str;

}


var convUpdateSent = false;

const bot = new Bot(adapter)
    .use(new MemoryStorage())
    .use(new BotStateManager())
    .onReceive((context) => {

        if (context.request.type === 'message') {

            const reference = context.conversationReference;

            if (context.request.attachments != undefined) {

                context.request.attachments.forEach(function (obje) {
                   let contentUrl = obje.contentUrl;
                   let contentType = obje.contentType;


                   if (contentType.startsWith("image")) {
                       console.log(contentUrl);

                       try {

                           request({ url: contentUrl, encoding: null }, function (err, res, body) {

                               processImage(body)
                                   .then(function (faceJsonObject) {

                                       faceJsonObject.forEach(function (face) {
                                           var gender = face.faceAttributes.gender;
                                           var age = face.faceAttributes.age;
                                           var smile = face.faceAttributes.smile;
                                           var glasses = face.faceAttributes.glasses;

                                           bot.createContext(reference, function (con) {
                                               var msg = messageBuilder(gender, age, smile, glasses);
                                               con.reply(msg);
                                           })

                                       })

                                   })
                                   .catch(function (error) {
                                       console.log(error.message);
                                   });

                           });

                       } catch (e) {
                           console.log(e);
                       }

                   }

                })
            } else {
                context.reply("Sende mir bitte ein Bild.");
            }

        } else {

            if (convUpdateSent == false) {
                context.reply("Hi, sende mir ein Selfie von dir das ich analysieren kann :)");
                convUpdateSent = true;
            }

        }

    });