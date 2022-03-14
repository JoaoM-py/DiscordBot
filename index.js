
const {Client, Intents}= require('discord.js');
const { Command } = require('discord.js-commando');


const bot = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });

const token = 'OTM1NzM1Njc3MzU2NzYxMTI4.YfC9wg.WGceC7cGZcPPvuLYdiD261ZuFXM';

bot.on('ready',()=>{
    console.log('olá')
}) 

bot.on('message',(message)=>{
    if(message.author.bot == true) return

    if (message.content == "oi"){
        message.channel.send('o')
    }

    if (message.content == "!chifre"){
        message.channel.send(String(Math.floor(Math.random() * 100)))
    }


    if (message.content =="!entrar"){
        const {voice} = message.member
        if (!voice.channelID){
            message.reply('Fora de um canal de voz')
            return
        }
        voice.channel.join()
    
    }
}) 


bot.on('voiceStateUpdate', (oldState, newState) => {
    if(oldState.channelID === newState.channelID) {
        console.log('a user has not moved!')
    }
    if(oldState.channelID != null && newState.channelID != null && newState.channelID != oldState.channelID) {
        console.log('a user switched channels')
    }
    if(oldState.channelID === null) {
        console.log('a user joined!')
    }
    if (newState.channelID === null) {
        console.log('a user left!')
    }
});

bot.login(token);








