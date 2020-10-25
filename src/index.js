// Supports ES6
// import { create, Whatsapp } from 'venom-bot';
const venom = require('venom-bot');
const banco = require('./bank');
const stages = require('./stages');

// Just for tests
/*
let resp = stages.step[getStage(message.from)].obj.execute();
      for(let i =0; i< resp.length; i++){
        const element = resp[i];
        console.log(element);
      }
*/

venom
  .create()
  .then((client) => start(client))
  .catch((erro) => {
    console.log(erro);
  });


 function start(client) {
  client.onMessage((message) => {
    let resp = stages.step[getStage(message.from)].obj.execute(message.from,message.body);
      for(let index = 0; index < resp.length; index++){
        const element = resp[index];
        client.sendText(message.from, element);
      }
  });
}


function getStage(user){
  return banco.db[user].stage;
}

//console.log(stages.step[getStage("user2")].obj.execute());
//console.log(stages.step[getStage("user1")].obj.execute());