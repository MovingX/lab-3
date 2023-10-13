const TelegramApi = require("node-telegram-bot-api");
const token = "6002796522:AAFpEg4******wPC4hxyoHC9K4qo5mFwfc4";

const bot = new TelegramApi(token, { polling: true });

const start = () => {
    bot.setMyCommands([
        { command: '/start', description: 'Приветствие' },
        { command: '/name', description: 'Вывести имя' },
    ])

    bot.on("message", async msg => {
        const text = msg.text;
        const chatID = msg.chat.id;

        if (text === "/start") {
            await bot.sendSticker(chatID, "https://tlgrm.ru/_/stickers/2a3/316/2a3316f0-c119-3943-b73f-fc7dd04275cc/3.webp")
            return bot.sendMessage(chatID, "Погнали!!!")
        }

        if (text === "/name") {
            return bot.sendMessage(chatID, "Тебя зовут: " + msg.from.first_name + " " + msg.from.last_name)
        }

        return bot.sendSticker(chatID, "https://tlgrm.ru/_/stickers/2a3/316/2a3316f0-c119-3943-b73f-fc7dd04275cc/96/15.webp")
        //console.log(msg); - вывести информацию
        //bot.sendMessage(chatID, "Ты отправил: " + text); - отправка сообщений от бота
    })
}
start();