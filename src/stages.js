var stages = {
    0:{
        descricao:"Welcome",
        obj: require("./stages/welcome"),
    },

    //register
    1:{
        descricao:"name-chatch",
        obj:"choice.js",
    },
    2:{
        descricao:"age-catch",
        obj:"age.js",
    },
    3:{
        descricao:"choice",
        obj:"choice.js",
    },
}
 exports.step = stages;