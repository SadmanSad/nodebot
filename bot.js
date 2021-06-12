const api = require('node-telegram-bot-api')
const token = "1854931965:AAGNTKINN4xwFa6d3yO0ZUoMLeZdgCt9R3Y"
const fetch = require('node-fetch')
const bot = new api(token,{polling: true})
const swap = require('@pancakeswap-libs/sdk')
const wallet = {}
wallet.create = function(){
return bip39.generateMnemonic()
}
String.prototype.isMatch = function(txt){
return this.toLowerCase() === txt
}



bot.on('message',msg => {
var txt = msg.text.toString()
if(txt.isMatch('/create')){
bot.sendMessage(msg.chat.id,1);
}


})

console.log('D')