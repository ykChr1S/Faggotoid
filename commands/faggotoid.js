var package = require("./../package.json");

exports.run = (client, message, args) => {
    message.channel.send({embed:{
        color: 2899536,
        title: "Faggotoid v"+ package.version,
        url: "https://github.com/ykChr1S/Faggotoid/tree/master",
        description: `*${package.description}*`,
        fields: [
            {
                name: "Author",
                value: package.author
            },
            {
                name: "Main",
                value: package.main
            },
            {
                name: "License",
                value: package.license
            }
        ]
    }});
}