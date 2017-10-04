var config = require("./JSON/config.json");

exports.run = (client, message, args) => {
    if (message.author.id == config.ownerID) {
        let text = args.slice(0).join(" ");
        message.delete();
        message.channel.send(text);
    } else {
        message.channel.send(`Hey @everyone! ${message.author.username} is a faggotoid!`)
    };
}