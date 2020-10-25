var stages = {
    0:{
        descricao:"Welcome",
        obj: require("./stages/welcome"),
    },
    1:{
        descricao:"select",
        obj:require("./selectors/select"),
    },

    //register
    2:{
        descricao:"name-catch",
        obj:require("./stages/name"),
    },
    3:{
        descricao:"select2",
        obj: require("./selectors/select2"),
    },
    4:{
        descricao:"gen-catch",
        obj: require("./stages/gen"),
    },
    5:{
        descricao:"select3",
        obj: require("./selectors/select3"),
    },
    6:{
        descricao:"gen-confir",
        obj: require("./stages/gen-confrim"),
    },
    7:{
        descricao:"place",
        obj: require("./stages/place"),
    },  
}
 exports.step = stages;