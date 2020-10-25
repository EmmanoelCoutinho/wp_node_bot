
const options = require("../options/options");
const banco = require("../bank");

function execute(user,msg){

    //select the correct js file
    if(msg === "#"){
        banco.db[user].stage = 0;
    }
    if(msg === "1"){
        banco.db[user].stage = 2;
        return [`Certo, Vamos iniciar o cadastro do caso. \nPor favor, informe o NOME\nCOMPLETO do paciente`];
    }
    if(msg === "2"){
        banco.db[user].stage = 44;
    }
    if(msg === "3"){
        banco.db[user].stage = 33;
    }

    if(!options.menu[msg]) {
        return ["```Digite # para reiniciar```","Código inválido"];
    }
    
    banco.db[user].itens.push(options.menu[msg]);

    return[options.menu[msg].descricao];
}

exports.execute = execute;