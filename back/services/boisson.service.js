let Boisson = require('../models/boisson.model')

exports.allDrink = async () => {
    let Boissons = await Boisson.find({});
    if(Boissons != null) {
        return Boissons
    } else {
        return({
            success: false
        })
    }
}

