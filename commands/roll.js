exports.run = (client, message, args) => {
    let num = args[0];
    if (isNaN(num)) {
        var rand = Math.ceil(Math.random() * 100);
    } else {
        if (num > 999999999999999999) {
            num = 100;
        };
        var rand = Math.ceil(Math.random() * num);
    };
    message.channel.send(rand);
};