const DessertService = require('../services/dessert.service');

exports.allDessert = async (req, res) => {
    try {
        let Dessert = await DessertService.allDessert();
        if (Dessert.success) {
            res.status(400)
            res.send(Dessert)
        } else {
            res.status(200)
            res.send(Dessert)
        }
    } catch (e) {
        res.status(400)
        res.send({
            success: false,
            devMessage: e,
        })
    }
}
exports.oneDessert = async (req, res) => {
    try {
        let Dessert = await DessertService.oneDessert(req.params.id);
        if (Dessert.success) {
            res.status(400)
            res.send(Dessert)
        } else {
            res.status(200)
            res.send(Dessert)
        }
    } catch (e) {
        res.status(400)
        res.send({
            success: false,
            devMessage: e,
        })
    }
}
