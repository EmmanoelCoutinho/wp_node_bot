const banco = require("../bank");
const options2 = require("../options/options2")


function execute(user,msg){ 

    let menu = "Por favor, digite a opção de acordo com o Menu abaixo:\n\n";

    Object.keys(options2.menu).forEach((value) => {
        let element = options2.menu[value];
        menu += `${value}- ${element.descricao} \n`
    });

    banco.db[user].stage = 3;

    var pref = [`Você confirma que o nome\ndo paciente é ${msg}\n`,menu];
    return[pref[1],pref[0]];
    
}

exports.execute = execute;