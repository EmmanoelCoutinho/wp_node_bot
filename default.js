/*

// Supports ES6
// import { create, Whatsapp } from 'venom-bot';
const venom = require('venom-bot');
const banco = require('./bank');
const stages = require('./stages');


venom
  .create()
  .then((client) => start(client))
  .catch((erro) => {
    console.log(erro);
  });

 function start(client) {
  client.onMessage((message) => {
    console.log(message);
    if (message.body === 'Hi' && message.isGroupMsg === false) {
      client
        .sendText(message.from, 'Welcome Venom 🕷')
        .then((result) => {
          console.log('Result: ', result); //return object success
        })
        .catch((erro) => {
          console.error('Error when sending: ', erro); //return object error
        });
    }
  });
}


function getStage(user){
  return banco.db[user].stage
}

//console.log(stages.step[getStage("user2")].obj.execute());
//console.log(stages.step[getStage("user1")].obj.execute());

*/