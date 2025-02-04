const Discord = require('discord.js');

module.exports =  {
    name: "aide",
    category: "studenthelp",
    usage: "aide",
    run: async (client, message) => {
        let pages = [
            '\n`!!aide`\n=>Voir ce que je te propose \n' +
            '\n`!!sondage "question" ou i!sondage "question" "choixA" "choixB"... `\n => crée un sondage, guillemets obligatoire!\n' +
            '\n`!!rang`\n => Permet de connaitre votre rang (level + xp + progression) \n ' +
            '\n`!!miseXp [@unePersonne] [combien]`\n => Ppour miser de l\'Xp \n' +
            '\n`!!DL`\n => affiche les DL usuel en 0 (physique)\n' +
            '\n`!!coordo`\n=> Fiche coordo ph111\n' +
            '\n`!!algo`\n=> Entrainement hexa/binaire\n',
            //========================================================================
            '\n`!!chut`\n=> vous en avez marre?\n ' +
            '\n`!!objection`\n => vous n\'etes pas d\'accord? \n ' +
            '\n`!!frToen <\mot\>\n` => Vous traduit un mot francais vers l\'anglais\n'

        ]; //array of pages

        let page = 1;

        const embed = new Discord.MessageEmbed()
            .setColor('#DB13C2')
            .setDescription(pages[page - 1])
            .setImage('https://imgur.com/N8FhelH.png')
            .setThumbnail('')
            .setFooter(`Page ${page} / ${pages.length}`, message.author.avatarURL)
            .setTimestamp();
        message.channel.send(embed).then(msg => {

            msg.react('⏪').then(r => {
                msg.react('⏩')

                const backwardsFilter = (reaction, user) => reaction.emoji.name === '⏪' && user.id === message.author.id;
                const forwardsFilter = (reaction, user) => reaction.emoji.name === '⏩' && user.id === message.author.id;

                const backwards = msg.createReactionCollector(backwardsFilter, {time: 60000});
                const forwards = msg.createReactionCollector(forwardsFilter, {time: 60000});


                backwards.on('collect', r => {
                    if (page === 1) return;
                    page--;
                    embed.setDescription(pages[page - 1]);
                    embed.setFooter(`Page ${page} / ${pages.length}`, message.author.avatarURL);
                    msg.edit(embed)
                })

                forwards.on('collect', r => {
                    if (page === pages.length) return;
                    page++;
                    embed.setDescription(pages[page - 1]);
                    embed.setFooter(`Page ${page} / ${pages.length}`, message.author.avatarURL);
                    msg.edit(embed)
                })

            })

        })
    }
};
