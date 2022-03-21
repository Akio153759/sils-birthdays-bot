require('dotenv').config();

const { Client, Intents } = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS] });
const employees = require('./employees');
const schedule = require('node-schedule');

client.on('ready', () => {
  console.info(`Logged in as ${client.user.tag}!`);

  schedule.scheduleJob(process.env.CRON_SCHEDULE_EXPRESSION, () => {
    console.info('Executing job...');
    const channel = client.channels.cache.find(channel => channel.id === process.env.DISCORD_CHANNEL_ID);
    const birthdays = employees.getBirthdays();

    birthdays.forEach(empl => {
      channel.send(`Feliz cumple ${empl.name}!! Que la pases zarpado :beers: :tada:`);
    });
  });
});

client.on('message', message => {
  console.info('on message receive...');
  if (message.content == '/spam silsbot') {
    console.info('on spam silsbot...');
    const channel = client.channels.cache.find(chn => chn.id === '953653654601220177');
    channel.send('/dolar');
  }
})
client.login(process.env.TOKEN);