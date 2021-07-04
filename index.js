const Discord = require('discord.js');

const { prefix, token } = require('./config.json');

const client = new Discord.Client();

client.once('ready', () => {
    console.log('Prêt!');
});

client.on('message', (message) => {
    if (message.content === '${prefix}ping') {
        message.channel.send('Pong!');
    }
    else if (message.content === `${prefix}infos`)
        message.channel.send(`Nom du serveur : ${message.guild.name}\n Nombre d'utilisateurs : ${message.guild.memberCount}`)
    else if (message.content === `${prefix}ping`)
        message.channel.send(`Ping du bot : ${client.ws.ping}ms.`)
    else if (message.content === 'homophobe')
            message.channel.send('pd')
    else if (message.content === 'facile')
            message.channel.send('ez')
});

client.login('ODU5NDY4ODA0NTY0NDUxMzI4.YNtIsw.wRLxcN8e7G0eTnosSxEUhbxhzdk');

