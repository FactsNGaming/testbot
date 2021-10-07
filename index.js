const Discord = require("discord.js");
require('events').EventEmitter.defaultMaxListeners = 1000;
process.setMaxListeners(1000);
const prefix = 'alice '
const fs = require('fs');
const { Client, Intents } = require('discord.js');
const token = process.env.token
// Create a new client instance
const client = new Client({ intents: [Intents.FLAGS.GUILDS]});

client.on("ready", () => {
  console.log("I am ready!");
});
client.on("ready", () =>{
    console.log(`Logged in as ${client.user.tag}!`);
    client.user.setPresence({
        status: "idle",  //You can show online, idle....
        game: {
            name: "ping",  //The message shown
            type: "STREAMING" //PLAYING: WATCHING: LISTENING: STREAMING:
        }
    });
 });

 
client.on("ready", () =>{
  client.user.setActivity('say "hi"', {
  type: "STREAMING",
  url: "https://www.twitch.tv/discord"
});
})

client.login(process.env.TOKEN);
