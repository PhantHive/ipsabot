const { MessageEmbed } = require('discord.js');
const { Tenor } = require("tenorjs@1.0.7").client({
    "Key": "NT23U13IZ0AH", // https://tenor.com/developer/keyregistration
    "Filter": "off", // "off", "low", "medium", "high", not case sensitive
    "Locale": "fr_FR"
});

module.exports = {

    name: "slap",
    aliases: ["claque"],
    timeout: 20000,
    category: "miscellaneous",
    description: "slap someone",
    usage: "slap",
    run: async (client, message, args) => {


        Tenor.Search.Random("slap", "1").then(Result => {
            const result = Result.url;
            const embed = new MessageEmbed()
                .setColor('ORANGE')
                .setTitle(`I SLAP U |`)
                .setThumbnail(result)
                .setDescription(message.author.username + " slap " + args[0]);
            message.channel.send(embed)
        }).catch(console.error);


    }

}