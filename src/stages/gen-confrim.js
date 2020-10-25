const banco = require("../bank");
const options2 = require("../options/options2");

function execute(user,msg){


    banco.db[user].stage = 7;
    return [`Você confirma que o paciente tem ${msg}?\n1- Sim\n2- Não`];
    

};

exports.execute = execute;