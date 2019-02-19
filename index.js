const Discord = require('discord.js');

const client = new Discord.Client();

var prefix = "/";

var prefix2 = "!";

client.login("NDk5ODgyMDE1MjU3MTMzMDg5.DqC3VA.oN1JvDMXBWLEXhKEQAUQQNOr8_E");

client.on ("ready", () => {
      client.user.setActivity("FiveM");
});

client.on ('message', message => {
  if(message.content === "bonjour"){
    message.reply("Bonjour !");
  }


  if(message.content === prefix + "aide"){
    var help_embed = new Discord.RichEmbed()
    .setThumbnail(message.author.avatarURL)
    .setColor("#0043FF")
    .setTitle("Voici la liste des commandes :grey_question:")
    .setDescription("!IP \n\n!DISCORD \n\n!VOTE \n\n!TOUCHES \n\n!ANNONCE")
    .setFooter("Générer par Shadow Life BOT")
    .setTimestamp()
    message.channel.send(help_embed);
    console.log("Un joueur à affiché la page d'aide !")
  }

  if(message.content === prefix + "mod") {
    var mod_embed = new Discord.RichEmbed()
    .setColor('RANDOM')
    .setTitle(`:tools: Voici les commandes modérations !`)
    .setThumbnail(message.author.avatarURL)
    .addField("/kick <@user>", "Kick l'utilisateur !")
    .addField("/ban <@user>", "Ban l'utilisateur !")
    .addField("/clear nombre", "Supprime le nombre de messages indiqué")
    .addField("/mute <@user>", "Mute l'utilisateur mentionné")
    .addField("/unmute <@user>", "Unmute l'utilisateur mentionné")
    .setFooter("Générer par Shadow Life BOT")
    .setTimestamp()
    message.channel.send(mod_embed);
  }

  if(message.content === prefix2 + "ip"){
    var help_embed = new Discord.RichEmbed()
    .setColor("#7000FF")
    .setTitle("Voici l\'adresse du serveur")
    .setDescription("176.31.43.186:30120")
    .setFooter("\nGénérer par Shadow Life BOT")
    .setTimestamp()
    message.channel.send(help_embed);
    console.log("Un joueur à affiché l\'ip du serveur !")
  }

  if(message.content === prefix2 + "discord"){
    var help_embed = new Discord.RichEmbed()
    .setColor("#FF3D3D")
    .setTitle("Voici l\'adresse du discord")
    .setDescription("https://discord.gg/J9GYDQT")
    .setFooter("\nGénérer par Shadow Life BOT")
    .setTimestamp()
    message.channel.send(help_embed);
    console.log("Un joueur à affiché l\'ip du discord !")
  }

  if(message.content === prefix2 + "vote"){
    var help_embed = new Discord.RichEmbed()
    .setColor("#FF9300")
    .setTitle("Voici le lien pour les votes")
    .setDescription("https://gta.top-serveurs.net/vote/frqcbe-shadow-life")
    .setFooter("\nGénérer par Shadow Life BOT")
    message.channel.send(help_embed);
    console.log("Un joueur à affiché le lien pour les votes !")
  }

  if(message.content === prefix2 + "help"){
    var help_embed = new Discord.RichEmbed()
    .setColor("#FF9300")
    .setTitle("Message Serveur")
    .setDescription("@👨 CITOYEN Si vous pouvez vous connecter lundi 15 Octobre 2018 sa aideras le\nserveur à monter son nombre de connecté pour la raison que nous avons investi dans\n une PUB !\nMerci à vous ! ")
    .setFooter("\nGénérer par Shadow Life BOT")
    message.channel.send(help_embed);
    console.log("Un joueur à affiché le lien pour les votes !")
  }

  if(message.content === prefix2 + "touches"){
    var help_embed = new Discord.RichEmbed()
    .setColor("#65FF4A")
    .setTitle("Voici les touches utilisé sur le serveur")
    .setDescription("[F5] ➖ Menu personnel \n\n[F6] ➖ Menu de métier \n\n[F7] ➖ Inventaire \n\n[M] ➖ Téléphone \n\n[K] ➖: Fermer le véhicule \n\n[B] ➖ Pointer du doigt \n\n[,] ➖ Coffre du véhicule\n\n[X] ➖ Annuler l'animation\n\n[+] ➖ Menu d'information \n\n[%] ➖ Levé les mains\n\n[SUPPR] ➖ Missions moldu \n\n[Shift + H] ➖ Volume voix\n\n[CTRL-Gauche] ➖ S'accroupir")
    .setFooter("\nGénérer par Shadow Life BOT")
    .setTimestamp()
    message.channel.send(help_embed);
    console.log("Un joueur à affiché les touches utilisé sur le serveur !")
  }

  if(message.content === prefix2 + "annonce"){
    var help_embed = new Discord.RichEmbed()
    .setColor("#FE33FF")
    .setTitle("Voici les commandes d\'annonces à utiliser sur le serveur\nVous devrez les saisir de la même façon que précisé ici dans votre F8")
    .setDescription("💬Twitter ➖ twt 1 (message) \n\n🗯️HRP ➖ ooc 1 (message) \n\n🚓LSPD ➖ police 1 (message) \n\n🚕Taxi ➖ taxi 1 (message) \n\n🚑EMS ➖ ambu 1 (message) \n\n🛠️Mécano ➖ mecano 1 (message) \n\n🍸Bahama ➖ bahama 1 (message) \n\n👠Unicorn ➖ unicorn 1 (message) \n\n🍺Tequi La-La➖ tequila 1 (message) \n\n🍻Spirits ➖ spirits 1 (message) \n\n🗽Gouvernement ➖ gouv 1 (message) \n\n🏘️Agent Immobilier➖ immo 1 (message) \n\n⚖️Justice ➖ justice 1 (message)")
    .setFooter("\nGénérer par Shadow Life BOT")
    .setTimestamp()
    message.channel.send(help_embed);
    console.log("Un joueur à affiché les touches utilisé sur le serveur !")
  }

  if(message.content.startsWith(prefix + "kick")){
    if(!message.guild.member(message.author).hasPermission("KICK_MEMBERS")) return message.channel.send("Vous n\'avez pas la permission de faire cette commande !");

    if(message.mentions.users.size === 0) {
      return message.channel.send("Vous devez mentionner un utilisateur !")
    }

    var kick = message.guild.member(message.mentions.users.first());
    if(!kick){
      return message.channel.send("L\'utilisateur n'est pas présent !")
    }

    if(!message.guild.member(client.user).hasPermission("KICK_MEMBERS")){
      return message.channel.send("Tu n\'a pas la permission pour kick !");
    }

    kick.kick().then(member => {
      message.channel.send(`${member.user.username} à été kick par ${message.author.username}`)
    });
}
    if(message.content.startsWith(prefix + "clear")) {
      if(!message.guild.member(message.author).hasPermission("MANAGE_MESSAGES")) return message.channel.send("Vous n\'avez pas la permission !");

      let args = message.content.split(" ").slice(1);

      if(!args[0]) return message.channel.send("Tu dois précisé un nombre de messages à supprimer !")
      message.channel.bulkDelete(args[0]).then(() => {
        message.channel.send(`${args[0]} messages ont été supprimés !`);
      })
    }
});
