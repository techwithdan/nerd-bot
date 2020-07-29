const { default: Axios } = require("axios");
const { randomGenerator } = require("../helper_func/randomGenerator");

async function catFacts(msg){
    const response = await Axios.get("https://cat-fact.herokuapp.com/facts")
    const num = response.data.all.length
    const index = randomGenerator(num)
    msg.channel.send(response.data.all[index].text)
}


exports.catFacts = catFacts;
