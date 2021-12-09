const { Client, Message, MessageEmbed } = require("discord.js")
const axios = require("axios");
const url = "https://zenquotes.io/api/random"
module.exports = {
    name: "quotes",
    aliases: ['q', ''],
  
    run: async (client, message, args) => {
      const res = await axios.get(url); 
      const resjson = JSON.stringify(res.data);
      const obj = JSON.parse(resjson)[0]
			const result = {
				title: "Quotes",
			description: `${obj.q}`,
				footer: {
		text: `- ${obj.a}`,
	},
			}
			message.channel.send({ embeds: [result] })

 

    },
};

