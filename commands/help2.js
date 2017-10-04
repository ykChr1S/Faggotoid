exports.run = (client, message, args) => {
		message.channel.send({
			embed: {
				color: 11300695,
				title: ":cookie: Cookie Clicker Commands :cookie:",
				description: "*Discord remake by yk_Chr1S*",
				fields: [{
					name: "^help2",
					value: "Shows this list."
				},
				{
					name: "^cookie",
					value: "Bake cookies!"
				},
				{
					name: "^info",
					value: "Shows current amount of cookies in the bank."
				},
				{
					name: "^buy <building>",
					value: "Attempts to buy a specified building."
				}
				]
			}
		});
	};