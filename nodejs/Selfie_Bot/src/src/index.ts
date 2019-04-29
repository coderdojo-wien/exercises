import * as restify from 'restify';
import { BotFrameworkAdapter } from 'botbuilder';

import { EchoBot } from './echobot';
import { SelfieBot } from './selfiebot';

// Create HTTP server.
const server = restify.createServer();
server.listen(3978, () => {
    console.log(`\n${server.name} listening to ${server.url}`);
    console.log(`\nGet Bot Framework Emulator: https://aka.ms/botframework-emulator`);
    console.log(`\nTo talk to your bot, open botconnect.bot file in the Emulator.`);
});

// Create adapter.
const adapter = new BotFrameworkAdapter({
    appId: "",
    appPassword: "",
});

// Catch-all for errors.
adapter.onTurnError = async (context, error) => {
    console.error(`\n [onTurnError]: ${error}`);
    await context.sendActivity(`Oops. Something went wrong!`);
};

// 1. CREATE BOT HERE
const bot = new SelfieBot();

// Listen for incoming requests.
server.post('/api/messages', (req, res) => {
    adapter.processActivity(req, res, async (context) => {
        await bot.onTurn(context);
    });
});