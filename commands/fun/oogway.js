const { Client, Message, MessageEmbed } = require("discord.js")

module.exports = {
  name: "oogway",
  aliases: ['o', ''],
  /**
   *
   * @param {Client} client
   * @param {Message} message
   * @param {String[]} args
   */
  run: async (client, message, args) => {
    const msg = args.join("+")
    const title = args.join(" ")
    const embed = new MessageEmbed()
      .setTitle(`"${title}" -Master Oogway`)
      .setColor("RANDOM")
      .setImage(`https://api.popcat.xyz/oogway?text=${msg}`)
    message.channel.send({ embeds: [embed] })
  },
};

