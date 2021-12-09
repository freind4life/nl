const { Client, Message, MessageEmbed } = require("discord.js")
const client = require("../../index.js")
client.config = require("../../config.json")

module.exports = {
  name: "help",
  aliases: ['h'],
  /**
   *
   * @param {Client} client
   * @param {Message} message
   * @param {String[]} args
   */
  run: async (client, message, args) => {
    const target = message.author;
    const embed = new MessageEmbed()
     .setTitle("Help Menu")
     .setDescription(`Here is the list of commands! \n For more info on a spesific command use \`${client.config.prefix}\``)
     .setFooter(`Requested by ${target.tag}`)
     .addFields(
       { name: "😂Fun", value: "`biden` `joke` `meme` `oogway` `quotes` `quote` "},
       { name: "🔧Utility", value: "`avatar` `ping` `serverinfo` `serverprofile` `suggest`"}
     )
     .setColor("RANDOM")
    message.channel.send({ content: "Here you go!", embeds: [embed] })
  },
};