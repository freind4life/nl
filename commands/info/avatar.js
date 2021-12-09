const { Client, Message, MessageEmbed } = require("discord.js")

module.exports = {
  name: "avatar",
  aliases: ['a', 'pp'],
  /**
   *
   * @param {Client} client
   * @param {Message} message
   * @param {String[]} args
   */
  run: async (client, message, args) => {
    const target = message.mentions.users.first() || message.author;

    const embed = new MessageEmbed()
      .setTitle("Your avatar")
      .setImage(target.displayAvatarURL({ dynamic: true, size: 4096 }))
    message.channel.send({ embeds: [embed] })
  },
};