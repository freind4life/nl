const { Client, Collection } = require("discord.js");
const keepAlive = require("./keep_alive")

const client = new Client({
    intents: 32767,
});
module.exports = client;
// Global Variables
client.commands = new Collection();
client.slashCommands = new Collection();
client.config = require("./config.json");

// Initializing the project
require("./handler")(client);

keepAlive();
//done

client.login(client.config.token);


