const { MessageEmbed, WebhookClient } = require('discord.js');
const { Client, Message} = require("discord.js")

const webhookClient = new WebhookClient({ url: "https://discord.com/api/webhooks/918410473299398656/y7YFDCbj-_HRyVyeirDVNZf-TrmhdWnT4Xg8hsoq9SWomsbFsY0O7Ds8v7JGUWSDOW_q" });

module.exports = {
    name: "suggest",
    aliases: ['s'],
    /**
     *
     * @param {Client} client
     * @param {Message} message
     * @param {String[]} args
     */
    run: async (client, message, args) => {
        const msg = args.join(" ")
        if(!message) return message.reply("Please specify a suggestion.")

        const embed = new MessageEmbed()
            .setTitle("Suggestion")
            .setColor("RANDOM")
            .setDescription(msg)
            .setFooter(`Sent by ${message.author.tag}`)
        
        webhookClient.send({
          embeds: [embed]
        })
        
        await message.channel.send('Sent the suggestion!!')
    },
};