const BoissonService = require('../services/boisson.service');

exports.allDrink = async (req, res) => {
    try {
        let Boissons = await BoissonService.allDrink();
        if (Boissons.success) {
            res.status(400)
            res.send(Boissons)
        } else {
            res.status(200)
            res.send(Boissons)
        }
    } catch (e) {
        res.status(400)
        res.send({
            success: false,
            devMessage: e,
        })
    }
}
