const TelegramBot = require('node-telegram-bot-api');
require('dotenv').config();
const configTg = require('./config/tg.config');

const bot = new TelegramBot(configTg.token, { polling: true });

bot.on('message', async (msg) => { });