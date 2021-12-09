const { Client, Message, MessageEmbed } = require("discord.js")
const axios = require("axios")
const url = "https://api.popcat.xyz/joke"

module.exports = {
  name: "joke",
  aliases: ['j'],
  /**
   *
   * @param {Client} client
   * @param {Message} message
   * @param {String[]} args
   */
  run: async (client, message, args) => {
    const res = await axios.get(url);
    const resjson = JSON.stringify(res.data);
    const obj = JSON.parse(resjson)

    const embed = new MessageEmbed()
      .setTitle("A joke")
      .setDescription(`${obj.joke}`)
      .setColor("RANDOM")

    message.channel.send({ embeds: [embed] })
  },
};