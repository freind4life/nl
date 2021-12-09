const { Client, Message, MessageEmbed } = require("discord.js")

module.exports = {
  name: "biden",
  aliases: ['b'],
  /**
   *
   * @param {Client} client
   * @param {Message} message
   * @param {String[]} args
   */
  run: async (client, message, args) => {
    const query = args.join("+")

    const embed = new MessageEmbed()
      .setTitle("Joe biden")
      .setColor("RANDOM")
      .setImage(`https://api.popcat.xyz/biden?text=${query}`)

    message.channel.send({ embeds: [embed] })
  },
};