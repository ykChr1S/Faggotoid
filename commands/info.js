const cookie = require("./JSON/cookie.json");
var cookieJS = require("./cookie.js");
const misc = require("./misc.js");

misc.varCookies();

exports.run = (client, message, args) => {
	//all of this is just the cookie clicker menu
	message.channel.send({
		embed: {
			color: 11300695,
			title: ":cookie: Cookie Clicker :cookie:",
			fields: [{
				name: "Cookies in Bank",
				value: cookies + " cookies"
			},
			{
				name: "Cookies Baked All Time",
				value: cookiesAll + " cookies"
			},
			{
				name: "Cookie Efficiency (CE)",
				value: cookieInc + " CE"
			},
			{
				name: "Cursor" + client.emojis.get("363760370596446208"),
				value: `Adds 0.1 cookie to your CE. Costs ${Math.ceil(15 * (1.15 ** cursor))} cookies. You currently have ` + cursor + ` cursors in your collection. Together they increase your CE by ` + Math.floor(0.1 * cursor * 10) / 10 + ` cookies.`
			},
			{
				name: `Grandma` + client.emojis.get("363771479772495878"),
				value: `Adds 1 cookie to your CE. Costs ${Math.ceil(100 * (1.15 ** grandma))} cookies. You currently have ` + grandma + ` grandmas in your collection. Together they increase your CE by ` + 1 * grandma + ` cookies.`
			},
			{
				name: `Farm` + client.emojis.get("363780959642058755"),
				value: `Adds 8 cookies to your CE. Costs ${Math.ceil(1100 * (1.15 ** farm))} cookies. You currently have ` + farm + ` farms in your collection. Together they increase your CE by ` + 8 * farm + ` cookies.`
			},
			{
				name: `Mine` + client.emojis.get("363760160281329666"),
				value: `Adds 47 cookies to your CE. Costs ${Math.ceil(12000 * (1.15 ** mine))} cookies. You currently have ` + mine + ` mines in your collection. Together they increase your CE by ` + 47 * mine + ` cookies.`
			},
			{
				name: `Factory` + client.emojis.get("363804437283864587"),
				value: `Adds 260 cookies to your CE. Costs ${Math.ceil(130000 * (1.15 ** factory))} cookies. You currently have ` + factory + ` factories in your collection. Together they increase your CE by ` + 260 * factory + ` cookies.`
			},
			{
				name: `Bank` + client.emojis.get("363760123715518466"),
				value: `Adds 1400 cookies to your CE. Costs ${Math.ceil(1400000 * (1.15 ** bank))} cookies. You currently have ` + bank + ` banks in your collection. Together they increase your CE by ` + 1400 * bank + ` cookies.`
			},
			{
				name: `Temple` + client.emojis.get("363760202203529217"),
				value: `Adds 7800 cookies to your CE. Costs ${Math.ceil(20000000 * (1.15 ** temple))} cookies. You currently have ` + temple + ` temples in your collection. Together they increase your CE by ` + 7800 * temple + ` cookies.`
			},
			{
				name: `Wizard Tower` + client.emojis.get("363760225481654284"),
				value: `Adds 44000 cookies to your CE. Costs ${Math.ceil(330000000 * (1.15 ** tower))} cookies. You currently have ` + tower + ` wizard towers in your collection. Together they increase your CE by ` + 44000 * tower + ` cookies.`
			},
			{
				name: `Shipment` + client.emojis.get("363760194540404736"),
				value: `Adds 260000 cookies to your CE. Costs ${Math.ceil(5100000000 * (1.15 ** shipment))} cookies. You currently have ` + shipment + ` shipments in your collection. Together they increase your CE by ` + 260000 * shipment + ` cookies.`
			},
			{
				name: `Alchemy Lab` + client.emojis.get("363760086172172309"),
				value: `Adds 1600000 cookies to your CE. Costs ${Math.ceil(75000000000 * (1.15 ** alchemy))} cookies. You currently have ` + alchemy + ` alchemys in your collection. Together they increase your CE by ` + 1600000 * alchemy + ` cookies.`
			},
			{
				name: `Portal` + client.emojis.get("363760169475375104"),
				value: `Adds 10000000 cookies to your CE. Costs ${Math.ceil(1000000000000 * (1.15 ** portal))} cookies. You currently have ` + portal + ` portals in your collection. Together they increase your CE by ` + 10000000 * portal + ` cookies.`
			},
			{
				name: `Time Machine` + client.emojis.get("363760214089924608"),
				value: `Adds 65000000 cookies to your CE. Costs ${Math.ceil(14000000000000 * (1.15 ** timemachine))} cookies. You currently have ` + timemachine + ` time machines in your collection. Together they increase your CE by ` + 65000000 * timemachine + ` cookies.`
			},
			{
				name: `Antimatter Condensor` + client.emojis.get("363804956257419265"),
				value: `Adds 430000000 cookies to your CE. Costs ${Math.ceil(170000000000000 * (1.15 ** antimatter))} cookies. You currently have ` + antimatter + ` antimatters in your collection. Together they increase your CE by ` + 430000000 * antimatter + ` cookies.`
			},
			{
				name: `Prism` + client.emojis.get("363760177142562816"),
				value: `Adds 2900000000 cookies to your CE. Costs ${Math.ceil(2100000000000000 * (1.15 ** prism))} cookies. You currently have ` + prism + ` prisms in your collection. Together they increase your CE by ` + 2900000000 * prism + ` cookies.`
			},
			{
				name: `Chancemaker` + client.emojis.get("363760142803795970"),
				value: `Adds 21000000000 cookies to your CE. Costs ${Math.ceil(26000000000000000 * (1.15 ** chancemaker))} cookies. You currently have ` + chancemaker + ` chancemakers in your collection. Together they increase your CE by ` + 21000000000 * chancemaker + ` cookies.`
			}
			]
		}
	});
};