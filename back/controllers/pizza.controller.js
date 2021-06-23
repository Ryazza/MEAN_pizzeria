const PizzaService = require('../services/pizza.service');

exports.allPizza = async (req, res) => {
    try {
        let Pizzas = await PizzaService.allPizzas();
        if (Pizzas.success) {
            res.status(400)
            res.send(Pizzas)
        } else {
            res.status(200)
            res.send(Pizzas)
        }
    } catch (e) {
        res.status(400)
        res.send({
            success: false,
            devMessage: e,
        })
    }
}
exports.onePizza = async (req, res) => {
    try {
        let Pizzas = await PizzaService.onePizzas(req.params.id);
        if (Pizzas.success) {
            res.status(400)
            res.send(Pizzas)
        } else {
            res.status(200)
            res.send(Pizzas)
        }
    } catch (e) {
        res.status(400)
        res.send({
            success: false,
            devMessage: e,
        })
    }
}
