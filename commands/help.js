exports.run = (client, message, args) => {
    let help = args[0]
    if (help = 1) {
        message.channel.send({
            embed: {
                color: 3447003,
                author: {
                    name: "yk_Chr1S",
                    icon_url: "https://cdn.discordapp.com/avatars/246280451281387522/20d1a3792681a61a9b533f2d6f1d48f1.webp",
                },
                title: "**__Commands__**",
                description: "i command you to send me nudes",
                fields: [
                    {
                        name: "^faggotoid",
                        value: "For when you want to see inside of me. ( ͡° ͜ʖ ͡°)"
                    },
                    {
                        name: "^help <page>",
                        value: "Shows all of the commands for the bot. Quite useful if you want to pretend your handy and funny when you're not."
                    },
                    {
                        name: "^joke",
                        value: "Displays a random joke. A necessity for anyone who wishes they're were as funny as Seth McFarlane."
                    },
                    {
                        name: "^rules",
                        value: "Shows all of the rules. Quite useful if you don't want to get b&."
                    },

                    {
                        name: "^oof",
                        value: "OOOOOOOOOOOOOOF"
                    },
                    {
                        name: "^roll <number>",
                        value: "Rolls a random number between 1 and <number>. Without a specified number <number> defaults to 100."
                    }
                ]
            }
        })
    } else
        if (help = 2) {
            message.channel.send({
                embed: {
                    color: 11300695,
                    title: ":cookie: Cookie Clicker Commands :cookie:",
                    description: "*Discord remake by yk_Chr1S*",
                    fields: [
                        {
                            name: "^cookie",
                            value: "Bake cookies!"
                        },
                        {
                            name: "^stats",
                            value: "Shows current amount of cookies in the bank."
                        },
                        {
                            name: "^buy <building>",
                            value: "Attempts to buy a specified building."
                        }
                    ]
                }
            })
        } else
            message.channel.send({
                embed: {
                    color: 3447003,
                    title: "Invalid Syntax! ^help <page> is the correct use.",
                    description: "Available Pages: 1, 2"
                }
            })
}