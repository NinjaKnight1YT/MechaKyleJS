import DiscordJS, { Intents, Interaction, Message, MessageEmbed } from 'discord.js'
import dotenv from 'dotenv'
import { createPrinter } from 'typescript';
import path from 'path'
dotenv.config()


const intents = new DiscordJS.Intents(32767);
const client = new DiscordJS.Client({ intents });


client.on('ready', () => {
    console.log('MechaKyle\'s up')
    client.user?.setActivity('you.', { type: 'WATCHING'});
        })

    const clientID = '713099178607378502'
    const guildId = '985295666379120741'
    const guild = client.guilds.cache.get(guildId)
    let commands

    if (guild) {
        commands = guild.commands
    } else {
        commands = client.application?.commands
    }

client.on('messageCreate', async (message) => {
    if (message.content === 'MechaKyle IP') {
        const messages = await message.channel.messages.fetch({ limit: 100 });
        if (messages) {
            if (message.channel.type === "GUILD_TEXT") {
            message.channel.bulkDelete(messages);
            }
        }
        var request = require('request');
        var url = 'http://myexternalip.com/raw';
        request(url, function (err: any, resp: any, myip: any) {
        const IpEmbed = new MessageEmbed()
        .setTitle('Hobbit IP is: '+myip)
        .setDescription("Server Port: 25565\n**[Railway System Map](http://"+myip+":8888/index.html)\n[Dynmap](http://"+myip+":8123)**")
            message.channel.send({embeds: [IpEmbed]})
        });
    }
});

client.login(process.env.TOKEN)
