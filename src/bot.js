const { Client, Intents } = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS] });
const interval = 5000 * 60 * 60 * 8;
const employees = require('./employees');

require('dotenv').config();

client.on('ready', () => {
  console.info(`Logged in as ${client.user.tag}!`);

  const channel = client.channels.cache.find(channel => channel.id === process.env.DISCORD_CHANNEL_ID);

  setInterval(() => {
    const birthdays = employees.getBirthdays();

    birthdays.forEach(empl => {
        channel.send(`Feliz cumple ${empl.name}!! Que la pases zarpado :beers: :tada:`);
    });
  }, interval);

});

client.login(process.env.TOKEN);