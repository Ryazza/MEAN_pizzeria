let Pizza = require('../models/pizza.model')

exports.allPizzas = async () => {
    let Pizzas = await Pizza.find({});
    if(Pizzas != null) {
        return Pizzas
    } else {
        return({
            success: false
        })
    }
}
exports.onePizzas = async (idPizza) => {
    let Pizzas = await Pizza.findOne({_id: idPizza});
    if(Pizzas != null) {
        return Pizzas
    } else {
        return({
            success: false
        })
    }
}
