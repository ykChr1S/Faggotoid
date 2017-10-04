const cookie = require("./JSON/cookie.json");
const fs = require("fs");
const misc = require("./misc.js");

misc.varCookies();

function moreCookies() {
    message.channel.send({
        embed: {
            color: 11300695,
            title: "Not Enough Cookies!",
            description: "You currently need more cookies in order to by this building."
        }
    });
};

function incorrect() {
    message.channel.send({
        embed: {
            color: 11300695,
            title: "That is not the correct syntax! Use ^buy <building> to buy a building.",
            description: "Buildings: cursor, grandma, farm, mine, factory, bank, temple, wizardtower, shipment, alchemylab, portal, timemachine, antimatter, prism, chancemaker."
        }
    });
}

exports.run = (client, message, args) => {
    let buy = args[0];
    if (buy === 'cursor') {
        if (cookies < 15 * (1.15 ** cursor)) {
            moreCookies();
        } else {
            cookies = cookies - Math.floor(15 * 1.15 ** cursor);
            cursor += 1;
            message.channel.send({
                embed: {
                    color: 11300695,
                    title: "You now have " + cursor + " cursors." + client.emojis.get("363760370596446208"),
                    description: cursor + " cursors making " + Math.floor(0.1 * cursor * 10) / 10 + " cookies."
                }
            });
            misc.cookiesSave();
        }
    } else
        if (buy === 'grandma') {
            if (cookies < 100 * (1.15 ** grandma)) {
                moreCookies();
            } else {
                cookies = cookies - Math.floor(100 * 1.15 ** grandma);
                grandma += 1;
                message.channel.send({
                    embed: {
                        color: 11300695,
                        title: "You now have " + grandma + " grandmas." + client.emojis.get("363771479772495878"),
                        description: grandma + " grandmas making " + 1 * grandma + " cookies."
                    }
                });
                misc.cookiesSave();
            }
        } else
            if (buy === 'farm') {
                if (cookies < 1100 * (1.15 ** farm)) {
                    moreCookies();
                } else {
                    cookies = cookies - Math.floor(1100 * 1.15 ** farm);
                    farm += 1;
                    message.channel.send({
                        embed: {
                            color: 11300695,
                            title: "You now have " + farm + " farms." + client.emojis.get("363780959642058755"),
                            description: farm + " farms making " + 8 * farm + " cookies."
                        }
                    });
                    misc.cookiesSave();
                }
            } else
                if (buy === 'mine') {
                    if (cookies < 12000 * (1.15 ** mine)) {
                        moreCookies();
                    } else {
                        cookies = cookies - Math.floor(12000 * 1.15 ** mine);
                        mine += 1;
                        message.channel.send({
                            embed: {
                                color: 11300695,
                                title: "You now have " + mine + " mines." + client.emojis.get("363760160281329666"),
                                description: mine + " mines making " + 47 * mine + " cookies."
                            }
                        });
                        misc.cookiesSave();
                    }
                } else
                    if (buy === 'factory') {
                        if (cookies < 130000 * (1.15 ** factory)) {
                            moreCookies();
                        } else {
                            cookies = cookies - Math.floor(130000 * 1.15 ** factory);
                            factory += 1;
                            message.channel.send({
                                embed: {
                                    color: 11300695,
                                    title: "You now have " + factory + " factories." + client.emojis.get("363804437283864587"),
                                    description: factory + " factories making " + 260 * factory + " cookies."
                                }
                            });
                            misc.cookiesSave();
                        }
                    } else
                        if (buy === 'bank') {
                            if (cookies < 1400000 * (1.15 ** bank)) {
                                moreCookies();
                            } else {
                                cookies = cookies - Math.floor(1400000 * 1.15 ** bank);
                                bank += 1;
                                message.channel.send({
                                    embed: {
                                        color: 11300695,
                                        title: "You now have " + bank + " banks." + client.emojis.get("363760123715518466"),
                                        description: bank + " banks making " + 1400 * bank + " cookies."
                                    }
                                });
                                misc.cookiesSave();
                            }
                        } else
                            if (buy === 'temple') {
                                if (cookies < 20000000 * (1.15 ** temple)) {
                                    moreCookies();
                                } else {
                                    cookies = cookies - Math.floor(20000000 * 1.15 ** temple);
                                    temple += 1;
                                    message.channel.send({
                                        embed: {
                                            color: 11300695,
                                            title: "You now have " + temple + " temples." + client.emojis.get("363760202203529217"),
                                            description: temple + " temples making " + 7800 * temple + " cookies."
                                        }
                                    });
                                    misc.cookiesSave();
                                }
                            } else
                                if (buy === 'wizardtower') {
                                    if (cookies < 330000000 * (1.15 ** tower)) {
                                        moreCookies();
                                    } else {
                                        cookies = cookies - Math.floor(330000000 * 1.15 ** tower);
                                        tower += 1;
                                        message.channel.send({
                                            embed: {
                                                color: 11300695,
                                                title: "You now have " + tower + " towers." + client.emojis.get("363760225481654284."),
                                                description: tower + " wizard towers making " + 44000 * tower + " cookies."
                                            }
                                        });
                                        misc.cookiesSave();
                                    }
                                } else
                                    if (buy === 'shipment') {
                                        if (cookies < 5100000000 * (1.15 ** shipment)) {
                                            moreCookies();
                                        } else {
                                            cookies = cookies - Math.floor(5100000000 * 1.15 ** shipment);
                                            shipment += 1;
                                            message.channel.send({
                                                embed: {
                                                    color: 11300695,
                                                    title: "You now have " + shipment + " shipments." + client.emojis.get("363760194540404736"),
                                                    description: shipment + " shipments making " + 260000 * shipment + " cookies."
                                                }
                                            });
                                            misc.cookiesSave();
                                        }
                                    } else
                                        if (buy === 'alchemylab') {
                                            if (cookies < 75000000000 * (1.15 ** alchemy)) {
                                                moreCookies();
                                            } else {
                                                cookies = cookies - Math.floor(75000000000 * 1.15 ** alchemy);
                                                alchemy += 1;
                                                message.channel.send({
                                                    embed: {
                                                        color: 11300695,
                                                        title: "You now have " + alchemy + " alchemy labs." + client.emojis.get("363760086172172309"),
                                                        description: alchemy + " alchemy labs making " + 1600000 * alchemy + " cookies."
                                                    }
                                                });
                                                misc.cookiesSave();
                                            }
                                        } else
                                            if (buy === 'portal') {
                                                if (cookies < 1000000000000 * (1.15 ** portal)) {
                                                    moreCookies();
                                                } else {
                                                    cookies = cookies - Math.floor(1000000000000 * 1.15 ** portal);
                                                    portal += 1;
                                                    message.channel.send({
                                                        embed: {
                                                            color: 11300695,
                                                            title: "You now have " + portal + " portals." + client.emojis.get("363760169475375104"),
                                                            description: portal + " portals making " + 10000000 * portal + " cookies."
                                                        }
                                                    });
                                                    misc.cookiesSave();
                                                }
                                            } else
                                                if (buy === 'timemachine') {
                                                    if (cookies < 14000000000000 * (1.15 ** timemachine)) {
                                                        moreCookies();
                                                    } else {
                                                        cookies = cookies - Math.floor(14000000000000 * 1.15 ** timemachine);
                                                        timemachine += 1;
                                                        message.channel.send({
                                                            embed: {
                                                                color: 11300695,
                                                                title: "You now have " + timemachine + " time machines." + client.emojis.get("363760214089924608"),
                                                                description: timemachine + " time machines making " + 65000000 * timemachine + " cookies."
                                                            }
                                                        });
                                                        misc.cookiesSave();
                                                    }
                                                } else
                                                    if (buy === 'antimatter') {
                                                        if (cookies < 170000000000000 * (1.15 ** antimatter)) {
                                                            moreCookies();
                                                        } else {
                                                            cookies = cookies - Math.floor(170000000000000 * 1.15 ** antimatter);
                                                            antimatter += 1;
                                                            message.channel.send({
                                                                embed: {
                                                                    color: 11300695,
                                                                    title: "You now have " + antimatter + " antimatter condensors." + client.emojis.get("363804956257419265"),
                                                                    description: antimatter + " antimatter condensors making " + 430000000 * antimatter + " cookies."
                                                                }
                                                            });
                                                            misc.cookiesSave();
                                                        }
                                                    } else
                                                        if (buy === 'prism') {
                                                            if (cookies < 2100000000000000 * (1.15 ** prism)) {
                                                                moreCookies();
                                                            } else {
                                                                cookies = cookies - Math.floor(2100000000000000 * 1.15 ** prism);
                                                                prism += 1;
                                                                message.channel.send({
                                                                    embed: {
                                                                        color: 11300695,
                                                                        title: "You now have " + prism + " prisms." + client.emojis.get("363760177142562816"),
                                                                        description: prism + " prisms making " + 2900000000 * prism + " cookies."
                                                                    }
                                                                });
                                                                misc.cookiesSave();
                                                            }
                                                        } else
                                                            if (buy === 'chancemaker') {
                                                                if (cookies < 26000000000000000 * (1.15 ** chancemaker)) {
                                                                    moreCookies();
                                                                } else {
                                                                    cookies = cookies - Math.floor(26000000000000000 * 1.15 ** chancemaker);
                                                                    chancemaker += 1;
                                                                    message.channel.send({
                                                                        embed: {
                                                                            color: 11300695,
                                                                            title: "You now have " + chancemaker + " chancemakers." + client.emojis.get("363760142803795970"),
                                                                            description: chancemaker + " chancemakers making " + 21000000000 * chancemaker + " cookies."
                                                                        }
                                                                    });
                                                                    misc.cookiesSave();
                                                                }
                                                            } else
                                                                if (isNaN(buy)) {
                                                                    incorrect();
                                                                } else {
                                                                    incorrect();
                                                                }
};