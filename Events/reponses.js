
module.exports = async(client, message) => {

  if (message.author.bot) return;

  //fonction special
  var chaine = String(message.content);

  if (chaine.indexOf("dropbox") !== -1) {
      message.reply('Go ici amigo=> <#611829345446658048>' );
  }

  var chaine2 = String(message.content);

  if (chaine2.indexOf("chut") !== -1) {
      message.channel.send('ce manque de respect popopopo j\'aurai pas aimer');
  }

  var chaine3 = String(message.content);

  if (chaine3.indexOf("bonsoir") !== -1) {
      message.channel.send('salut mon ami ;)');
  }

  var chaine4 = String(message.content);

  if (chaine4.indexOf("t'as fait") !== -1) {
      message.channel.send('nop pas encore deso');
  }

  var chaine5 = String(message.content);

  if (chaine5.indexOf("???") !== -1) {
      message.channel.send('ceci etait une question que qql y reponde please (*ouai tu peux m\'appeler Dieu gamin*)');
  }

  var chaine6 = String(message.content);

  if (chaine6.indexOf("il est gentil") !== -1) {
      message.reply('je te promet c est vrai tavu');
  }

  var chaine7 = String(message.content);

  if (chaine7.indexOf("mdr") !== -1) {
      message.react('😂');
  }
}
