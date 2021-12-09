
const { Client, Message, MessageEmbed } = require("discord.js")

module.exports = {
  name: "serverprofile",
  aliases: ['svpfp', 'serverpfp'],
  /**
   *
   * @param {Client} client
   * @param {Message} message
   * @param {String[]} args
   */
  run: async (client, message, args) => {
    const image = message.guild.iconURL({ dynamic: true, size: 1024 })
    
    const embed = new MessageEmbed()
      .setTitle("Server Profile Picture")
      .setColor("RANDOM")
      .setImage(`${image}`)
    message.channel.send({ embeds: [embed] })
  },
};