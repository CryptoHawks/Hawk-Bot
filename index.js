const {Client, RichEmbed} = require('discord.js');
const bot = new Client();
 
const token = 'ODM1NTg2Nzk3MTUzMDI2MDgw.YIRm2A.XRXHj0sPxlvSSfpyrxSlxZqsTyk';
 
const PREFIX = '!';
 
 
bot.on('ready', () => {
    console.log('This bot is active!');
})
 
bot.on('guildMemberAdd', guildMember =>{
    let welcomeRole = guildMember.guild.roles.cache.find(role => role.name === 'Hawks');
 
    guildMember.roles.add(welcomeRole);
    guildMember.guild.channels.cache.get('834455034518437933').send(`Welcome <@${guildMember.user.id}> to our server! Make sure to check our paid membership!`)
});
 
                              
bot.login(token);