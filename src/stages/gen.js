const banco = require("../bank");
const options3 = require("../options/options3")


function execute(user,msg){ 

    if(msg === "1"){
        var g = "Feminino";
        banco.db[user].stage = 5;
         return [`Você confirma que o gênero é ${g}?\n1- Sim\n2- Não\n3- Resetar conversa`];
    }
    if(msg === "2"){
        var g = "Masculino"
        banco.db[user].stage = 5;
        return [`Você confirma que o gênero é ${g}?\n1- Sim\n2- Não\n3- Resetar conversa`];
    }
    if(msg === '3'){
        var g = "Prefiro não informar"
        banco.db[user].stage = 5;
        return [`Você confirma que o gênero é ${g}?\n1- Sim\n2- Não\n3- Resetar conversa`];
    }else{
        var g = "generalizado"
        banco.db[user].stage = 5;
        return [`Você confirma que o gênero é ${g}?\n1- Sim\n2- Não\n3- Resetar conversa`];
    }

    
    
}

exports.execute = execute;