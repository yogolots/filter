const Discord = require("discord.js");
const client = new Discord.Client();

client.on("ready", () => {
	console.log("I am ready!");
});

client.on("message", (msg) => { 
	var inclusive = msg.content.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"");
	inclusive = msg.content.replace(/[^\x20-\x7E]/g,"");
	if (msg.content.match(/\bnigga\b/i) || msg.content.match(/\bkike\b/i) || msg.content.match(/\bspic\b/i)
		|| msg.content.match(/\brape\b/i) || msg.content.match(/\brapes\b/i) || msg.content.match(/\braped\b/i)
		|| msg.content.match(/\braping\b/i) || msg.content.match(/\braper\b/i)) {
		silence(msg, msg.author);
	} else
	if (inclusive.match(/nigger/i) || inclusive.match(/faggot/i)) {
		silence(msg, msg.author);
	}
});

function silence(msg, origin) {
	if (origin == msg.author) {
		msg.delete().catch(console.error);
		msg.channel.send(msg.author+" is silenced for 60 minutes for using a no-no word.");
	}
	let role = msg.guild.roles.find('name', 'Member');
	   msg.member.removeRole(role).catch(console.error);
	let timerId = setTimeout(welcomeBack, 3600000);
	function welcomeBack() {
	  msg.member.addRole(role).catch(console.error);
	}
}

client.login("token");
