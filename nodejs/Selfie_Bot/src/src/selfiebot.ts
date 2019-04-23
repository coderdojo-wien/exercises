import { ActivityTypes, TurnContext, ConversationState, MemoryStorage } from 'botbuilder';
import { DialogSet, AttachmentPrompt, WaterfallDialog, DialogContext, TextPrompt } from 'botbuilder-dialogs';
import { CognitiveClient } from './cognitiveclient';

export class SelfieBot {

    private conversationState;
    private dialogState;
    private dialogs;
    private cognitiveClient: CognitiveClient;
    private cognitiveServicesKey: string = "<ADD FACY API KEY HERE>";

    constructor() {

        this.cognitiveClient = new CognitiveClient(this.cognitiveServicesKey);

        const memoryStorage = new MemoryStorage();
        this.conversationState = new ConversationState(memoryStorage);

        this.dialogState = this.conversationState.createProperty('dialogState');

        this.dialogs = new DialogSet(this.dialogState);
    
        this.dialogs.add(new AttachmentPrompt('attachment_prompt'));
    
        this.dialogs.add(new WaterfallDialog('attachment_dialog', [
            this.promptForAttachment.bind(this),
            this.callCognitiveService.bind(this)
        ]));
    
    }

    private async promptForAttachment(step) {
        return await step.prompt('attachment_prompt', 'Sende mir bitte ein Selfie!');
    }

    private async callCognitiveService(step) {
        var image = step.result[0];
        var url = image.contentUrl;
        var person = await this.cognitiveClient.getFaceAttributes(url);

        var gender;
        var smile;

        if(person.gender == "male") {
            gender = "ein Mann";
        } else {
            gender = "eine Frau";
        }

        if(person.smile > 0.6) {
            smile = "lächelst du auf dem Foto.";
        } else {
            smile = "lächelst du nicht auf dem Foto."
        }

        await step.context.sendActivity("Du bist ca. " + person.age + " Jahre alt und " + gender + ". Außerdem " + smile);
        return await step.endDialog();
    }


    public async onTurn(turnContext: TurnContext) {

        if (turnContext.activity.type === ActivityTypes.Message) {
            const dc: DialogContext = await this.dialogs.createContext(turnContext);
            await dc.continueDialog();
    
            if (!turnContext.responded) {
                await dc.beginDialog('attachment_dialog');
            }
        }
    
        await this.conversationState.saveChanges(turnContext);
    }


}