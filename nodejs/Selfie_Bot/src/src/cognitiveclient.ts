import * as fetch from 'node-fetch';

export class CognitiveClient {

    private key: string;

    constructor(cognitiveServiceKey: string) {
        this.key = cognitiveServiceKey;
    }

    async getFaceAttributes(fileUrl: string): Promise<any> {

        let requestHeaders: any = { 
            'Content-Type': 'application/octet-stream',
            'Ocp-Apim-Subscription-Key': this.key
        };

        return new Promise(function (resolve_out, reject_out) {
            fetch(fileUrl)
            .then(res => res.buffer())
            .then(async buffer => {
                try {
                    var res = await new Promise(function (resolve, reject) {
                        fetch("https://westcentralus.api.cognitive.microsoft.com/face/v1.0/detect?returnFaceId=false&returnFaceLandmarks=false&returnFaceAttributes=age,gender,glasses,smile", {
                        method: 'post',
                        body:    buffer,
                        headers: requestHeaders,
                    })
                    .then(res => res.json())
                    .then(json => {
                        if(json == null || json == undefined) {
                            var a = 1;
                        }
                        resolve(json);
                    });
                    });

                    resolve_out(res[0]["faceAttributes"]);

                } catch(e) {
                    console.log(e);
                }
                var b = 1;
            })
        });

    }

}