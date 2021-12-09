const { Client, Message, MessageEmbed } = require("discord.js")

module.exports = {
  name: "quote",
  aliases: ['q'],
  /**
   *
   * @param {Client} client
   * @param {Message} message
   * @param {String[]} args
   */
  run: async (client, message, args) => {
    const msg = args.join(" ")
    const embed = new MessageEmbed()
      .setTitle(`${msg}`)
      .setDescription(`-${message.author.tag}`)
      .setColor("RANDOM")
    message.channel.send({ embeds: [embed] })
  },
};