const { default: Axios } = require("axios");

async function advice(msg){
    const res = await Axios.get("https://api.adviceslip.com/advice")
    msg.channel.send(res.data.slip.advice);
}

exports.advice = advice;