const { Message, Client, MessageEmbed } = require("discord.js");
const axios = require("axios");
const url = "https://meme-api.herokuapp.com/gimme";


module.exports = {
  name: "meme",
  aliases: ['m'],
  /**
   *
   * @param {Client} client
   * @param {Message} message
   * @param {String[]} args
   */
  run: async (client, message, args) => {
    const res = await axios.get(url);
    const resdata = JSON.stringify(res.data)
    const obj = JSON.parse(resdata)
    //reasonnya di [0] harusnya ga pake [0]


    const embed = new MessageEmbed()
      .setTitle(`${obj.title}`)
      .setColor('RANDOM')
      .setURL(`${obj.url}`)
      .setDescription(`Source: ${obj.postLink}`)
      .setImage(`${obj.url}`) //sama btw
      .setFooter(`👍${obj.ups} | author: ${obj.author}`)
    message.channel.send({ embeds: [embed] })
    // sama aja errornya
  },
};

//buat file baru di folder fun aja bikin "quotes.js"
//gw gk bisa select all disini cuk kirim di discord templatenya

// lah gk bner
//anjir bingung
//buatin

