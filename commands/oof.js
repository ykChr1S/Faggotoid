const oof = require("./JSON/oof.json");
var oofs = oof.oofs;

const fs = require("fs");

function oofSave() {
    var fileContent = {
        "oofs": oofs,
    };
    fs.writeFile("C:/Faggotoid/Commands/JSON/oof.json", JSON.stringify(fileContent, null, 3), (err) => {
        if (err) {
            console.error(err);
            return;
        };
    });
};

function oofCount() {
    oofs += 1;
};

exports.run = (client, message, args) => {
    oofCount();
    message.channel.send({
        embed: {
            color: Math.floor(Math.random() * 16777215),
            title: oofs + " Dead Roblox Players",
            description: client.emojis.get("363096550874021898") + client.emojis.get("363096550874021898") + client.emojis.get("363096550874021898") + client.emojis.get("363096550874021898") + client.emojis.get("363096550874021898") + client.emojis.get("363096550874021898") + client.emojis.get("363096550874021898")
        }
    });
    oofSave();
};