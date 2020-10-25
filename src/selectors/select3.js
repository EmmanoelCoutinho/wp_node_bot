const options2 = require("../options/options3");
const banco = require("../bank");

function execute(user,msg){

    //select the correct js file
    if(msg === "1"){
        banco.db[user].stage = 6;
        return ['Qual a IDADE do paciente?\n("ex: 6 anos")'];
    }
    if(msg === "2"){
        banco.db[user].stage = 4;
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