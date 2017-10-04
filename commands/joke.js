const jokes = require("./JSON/jokes.json");
const misc = require("./JSON/misc.json");

exports.run = (client, message, args) => {
    var selectJoke = function () {
       // var colorList = ['15844367', '3066993', '3447003', '10181046', '3426654', '15844367', '15105570', '15158332', '15528177', '9807270'];
      var pickColor = misc.colorList[Math.floor(Math.random() * misc.colorList.length)];
        var pickJoke = jokes.jokeList[Math.floor(Math.random() * jokes.jokeList.length)];
        message.channel.send({
            embed: {
                color: pickColor,
                title: "Random Joke #" + Math.floor(Math.random() * jokes.jokeList.length),
                description: pickJoke,
                footer: {
                    text: jokes.jokeList.length + " jokes in Faggotoid."
                }
            }
        });
    }
    selectJoke();
}