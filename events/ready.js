const client = require("../index");

client.on("ready", () =>
    console.log(`${client.user.tag} is up and ready to go with ${client.ws.ping}ms`)
);
