
const banco = require("../bank")
const options = require("../options/options");

function execute(user,msg){

    let menu = "Por favor, digite a opção de acordo com o Menu abaixo:\n\n";

    Object.keys(options.menu).forEach((value) => {
        let element = options.menu[value];
        menu += `${value}- ${element.descricao} \n`
    });

    banco.db[user].stage = 1;

    var pref = [ "Olá eu sou a Sarah,\na assistente virtual do Instituto Desiderata para cadastro de pacientes!",menu];

    return [pref[1], pref[0]]
}

exports.execute = execute;