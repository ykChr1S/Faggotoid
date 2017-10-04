exports.run = (client, message, args) => {
    message.channel.send({
        embed: {
            color: 3447003,
            author: {
                name: "yk_Chr1S",
                icon_url: "https://cdn.discordapp.com/avatars/246280451281387522/20d1a3792681a61a9b533f2d6f1d48f1.webp",
            },
            title: "**__Rules__**",
            description: "follow or git b&, kid",
            fields: [{
                name: "Roblox is bad",
                value: "Simply by being here you agree **Roblox is a bad game** and should be deleted from the universe."
            },
            {
                name: "Music",
                value: "Only use the music bot in the #music channel."
            },
            {
                name: "yk_Chr1S does what he wants",
                value: "lol ill ban u for whatever i want do, n ill delet anything, and do anything i want"
            }
            ],
            footer: {
                text: "P.S.: ur gey lel"
            }
        }
    });
}