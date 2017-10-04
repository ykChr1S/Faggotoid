const cookie = require("./JSON/cookie.json");
const fs = require("fs");
const misc = require("./misc.js");

//var pickColor = colorList[Math.floor(Math.random() * colorList.length)];

module.exports = {
    varCookies: function () {
        cookies = cookie.cookies;
        cookiesAll = cookie.cookiesAll;
        cursor = cookie.cursor;
        grandma = cookie.grandma;
        farm = cookie.farm;
        mine = cookie.mine;
        factory = cookie.factory
        bank = cookie.bank;
        temple = cookie.temple;
        tower = cookie.tower;
        shipment = cookie.shipment;
        alchemy = cookie.alchemy;
        portal = cookie.portal;
        timemachine = cookie.timemachine;
        antimatter = cookie.antimatter;
        prism = cookie.prism;
        chancemaker = cookie.chancemaker;
        cookieInc = Math.ceil(1 + 0.1 * cursor + 1 * grandma + 8 * farm + 47 * mine + 260 * factory + 1400 * bank + 7800 * temple + 44000 * tower + 260000 * shipment + 1.6 * alchemy + 10000000 * portal + 65000000 * timemachine + 430000000 * antimatter + 2900000000 * prism + 21000000000 * chancemaker);
    },
    cInc: function () {
        cookieInc = Math.ceil(1 + 0.1 * cursor + 1 * grandma + 8 * farm + 47 * mine + 260 * factory + 1400 * bank + 7800 * temple + 44000 * tower + 260000 * shipment + 1.6 * alchemy + 10000000 * portal + 65000000 * timemachine + 430000000 * antimatter + 2900000000 * prism + 21000000000 * chancemaker);
    },
    cookiesSave: function () {
        var fileContent = {
            "cookies": cookies,
            "cookiesAll": cookiesAll,
            "cursor": cursor,
            "grandma": grandma,
            "farm": farm,
            "mine": mine,
            "factory": factory,
            "bank": bank,
            "temple": temple,
            "tower": tower,
            "shipment": shipment,
            "alchemy": alchemy,
            "portal": portal,
            "timemachine": timemachine,
            "antimatter": antimatter,
            "prism": prism,
            "chancemaker": chancemaker
        };
        fs.writeFile("./commands/JSON/cookie.json", JSON.stringify(fileContent, null, 3), (err) => {
            if (err) {
                console.error(err);
                return;
            };
        });
    }
};