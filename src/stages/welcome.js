

const options = require("../options");

function execute(){

    let menu = "Por favor,digite a opção de acordo com o Menu abaixo:\n\n";

    Object.keys(options.menu).forEach((value) => {
        let element = options.menu[value];
        menu += `${value}- ${element.descricao} \n`
    });

    return [menu, "Bem vindo ao bot Desiderata\npara cadastro de pacientes!"];
}

exports.execute = execute;