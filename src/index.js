const dotenv = require("dotenv");

dotenv.config();

const { Client, Events, GatewayIntentBits } = require("discord.js");

const token = process.env.DISCORD_TOKEN;
console.log(token);

// Create a new client instance
const client = new Client({ intents: [GatewayIntentBits.Guilds] });

client.once(Events.ClientReady, (readyClient) => {
  console.log(`Ready! Logged in as ${readyClient.user.tag}`);
});

client.login(token);
