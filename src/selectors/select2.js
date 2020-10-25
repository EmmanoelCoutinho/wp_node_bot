const options2 = require("../options/options2");
const banco = require("../bank");

function execute(user,msg){

    //select the correct js file
    if(msg === "1"){
        banco.db[user].stage = 4;
        return ["Qual o GÊNERO do paciente?\n1- Feminino\n2- Masculino\n3- Prefiro não informar\n4- Resetar conversa"];
    }
    if(msg === "2"){
        banco.db[user].stage = 3;
        return["Digite qualquer tecla para voltar ao passo anterior!"]
    }
    if(msg === "3"){
        banco.db[user].stage = 0;
        return["Digite qualquer tecla para resetar o chat!"]
    }

    banco.db[user].itens.push(options2.menu[msg]);

    return[options2.menu[msg].descricao];
}

exports.execute = execute;