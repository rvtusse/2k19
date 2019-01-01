const Telegraf = require('telegraf')
const Markup = require('telegraf/markup');
const session = require('telegraf/session')
const Stage = require('telegraf/stage')
const Scene = require('telegraf/scenes/base')
const { leave } = Stage
const bot = new Telegraf("766789313:AAGWqqlNP3N7BQvUH2bQJf4pNGqP-1SQZio");
var axios = require('axios');

const Extra = require('telegraf/extra')
const AnimationUrl1 = 'https://giphy.com/gifs/animation-snow-new-year-l0HUq1rMAH2gw97So'
// Create scene manager

const stage = new Stage()
stage.command('cancel', leave())


bot.use(session())
bot.use(stage.middleware());

bot.start(function (ctx) {
console.log('bot starting')
    ctx.reply("Heey! " + ctx.update.message.chat.first_name + ', Herve Tusse wishes you an Happy New year 2k19');
    ctx.replyWithAnimation(AnimationUrl1)
    ctx.replyWithPhoto('http://www.latestnewsreader.com/wp-content/uploads/2018/12/Happy-new-year-quotes-2019.png')
}),

    bot.hears([/hello( there)?/i, /hey( there)?/i, /hi( there)?/i], function (ctx) {
        ctx.reply("Hi " + ctx.update.message.chat.first_name + ', Herve Tusse wishes you an Happy New year 2k19');
        ctx.replyWithAnimation(AnimationUrl1)
        ctx.replyWithPhoto('http://www.latestnewsreader.com/wp-content/uploads/2018/12/Happy-new-year-quotes-2019.png')
        console.log('bot replying..')
    })

bot.startPolling()