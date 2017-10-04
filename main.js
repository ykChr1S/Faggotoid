const Discord = require("discord.js")
const client = new Discord.Client()

// | | config.json has most of the important stuff
// V V ie: ownerID, prefixes, and the bot token.
const config = require("./commands/JSON/config.json")

const fs = require("fs")
// client.user.setGame() controls what game the bot plays
// console.log just prints a line to the node.js console
client.on("ready", () => {
	console.log("Everything is stable at this moment but may or may not be 100% working. Try debugging with VSCode if something doesn't work.");
	client.user.setGame('Written by yk_Chr1S')
});

// This loop reads the /events/ folder and attaches each event file to the appropriate event.
fs.readdir("./events/", (err, files) => {
	if (err) return console.error(err);
	files.forEach(file => {
		let eventFunction = require(`./events/${file}`);
		let eventName = file.split(".")[0]
		// calls events with all their proper arguments *after* the `client` var.
		client.on(eventName, (...args) => eventFunction.run(client, ...args))
	})
})


// and here is the command handler. all it does is check messages for ^<command> and then refers to .js files
client.on("message", (message) => {
	
	//checks if another bot somehow uses the same prefix. This stops bots from getting stuck in an endless loop of replying to themselves and each other
	if (!message.content.startsWith(config.prefix) || message.author.bot) return;

	// checks if the author is a bot
	if (message.author.bot) return;
	// Exit and stop if there's no prefixes
	if (!message.content.startsWith(config.prefix)) {
		if (!message.content.startsWith(config.prefix2)) {
			return;
		}
	}

	const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
	const command = args.shift().toLowerCase();
	
	try {
		let commandFile = require(`./commands/${command}.js`)
		commandFile.run(client, message, args)
	} catch (err) {
		console.error(err)
	}

})

// the bot token is within ./commands/JSON/config.json
client.login(config.token)