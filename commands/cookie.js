const cookie = require("./JSON/cookie.json");
const fs = require("fs");
const misc = require("./misc.js");

misc.varCookies();

function cInc() {
    cookieInc = Math.ceil(1 + 0.1 * cursor + 1 * grandma + 8 * farm + 47 * mine + 260 * factory + 1400 * bank + 7800 * temple + 44000 * tower + 260000 * shipment + 1.6 * alchemy + 10000000 * portal + 65000000 * timemachine + 430000000 * antimatter + 2900000000 * prism + 21000000000 * chancemaker);
};

function cookieCount() {
    cInc();
    cookies += 1 + cookieInc;
    cookiesAll += 1 + cookieInc;
    cookies = Math.ceil(cookies);
    cookiesAll = Math.ceil(cookiesAll);
    misc.cookiesSave();
};

exports.run = (client, message, args) => {
    cookieCount();
    if (cookies < 9999999) {
        message.channel.send({
            embed: {
                color: Math.floor(Math.random() * 16777215),
                title: cookies + " Cookies Baked",
                description: ":cookie: :cookie: :cookie: :cookie: :cookie:",
                footer: {
                    text: "Do ^help 2 to get a list of all of the Cookie Clicker commands!"
                }
            }
        });
    }
};
