const Discord = require('discord.js');
const fs = require("fs");


module.exports = async(client, message) => {
	
	if (message.author.bot) return;
	
	var aide = String(message.content);
	
	var aideTrim = aide.toUpperCase().replace(/\s/g,'')
	
	if (guild.channel.id === '') {
		
		if (aideTrim.indexOf("ex 4 td1 " || "exercice td1 " || "exo 4 du td1" || "exo 4") ) {
			client.startTyping(message.channel)
			message.channel.send("Hello! tu as apparement besoin d'aide sur l'exercice 4 du td 1 de ph12, est-ce bien ca?").then(
		
		if (message.content === "oui") {
			message.reply("test")
		})
			
		}
		
	}
}