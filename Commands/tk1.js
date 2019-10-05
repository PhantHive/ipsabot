const Discord = require("discord.js");

module.exports.run = async(client, message, args) => {
    let pages = [
        '```py\n' +
        'from tkinter import * #ceci signifie qu on veux importer tous modules provenant de la librairie tkinter\n ' +
        'import tkinter as t #ceci signifie que l\'on souhaite appel la libraire tkinter en commencant par t.\n' +
        '        \n  ' +
        '# voici comment l\'on cree un menu graphique\n ' +
        'master = t.Tk() #ceci est l\'initialisation de notre menu tkinter on le nomme ici master\n ' +
        'master.geometry("650x250") #voici le format de notre fenetre graphique\n ' +
        'master.title("TP02--THE BEGINNING") #ici il s\'agit simplement du titre afficher en haut de la fenetre\n ' +
        '#=============================================```',
        '```py\n' +
        '#===Creation d\'un bouton;\n' +
        'button1 = Button(master, text="MON TEXTE", bg=\'#F103E9\', fg=\'black\', command = function1 ).place(x=\'0\', y=\'30\')\n' +
        '#Detail de ce que je viens de creer: il s\'agit d\'un bouton, il convient donc de lui donner un "nom": buttom1 \n' +
        '#Button designe l\'outil que l\'on souhaite utilise de la libraire Tkinter importer precedemment.\n\n'+
        '#il convient donc de definir l\'outil on ouvre donc une parenthese. Il faut tout d\'abord preciser a qui ou plutot quoi s\'applique notre outil(ici le boutton)\n\n'+
        '#Ici notre fenetre parent (parent window) est master(le nom qu\'on a attribuer a la fenetre tkinter\n\n' +
        '#bg et fg designe respectivement background(le fond) et foreground(le text) il s\'agit de parametres purement esthetique qui font leur differences dans un projet.\n' +
        '#tout deux sont des parametres de couleurs, il convient donc de leur associer un code en hexadecimal(voir sur internet couleur hexa) ou bien le nom de la couleur en anglais ou encore un code rgb etc\n\n' +
        '#enfin command signifie que l\'on souhaite associer notre boutton a une fonction par exemple si je click sur mon boutton alors ca me ferme ma fenetre tkinter alors on marquera: command=quit\n\n' +
        '#si l\'on souhaite attribuer notre boutton a une fonction ecrite (tutoriel sur les fonctions i!py1) alors on mettera command=nomDeLaFonction\n\n\n' +
        '#Suite du tutoriel i!tk2```'] ;

    let page = 1;



    const embed = new Discord.RichEmbed()
        .setColor('#DB13C2')
        .setFooter(`Page ${page} / ${pages.length}`)
        .setDescription(pages[page - 1])
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
                embed.setFooter(`Page ${page} / ${pages.length}`);
                msg.edit(embed)
            });

            forwards.on('collect', r => {
                if (page === pages.length) return;
                page++;
                embed.setDescription(pages[page - 1]);
                embed.setFooter(`Page ${page} / ${pages.length}`);
                msg.edit(embed)
            })

        })

    })
};

module.exports.help = {
    name: "tk1"
};