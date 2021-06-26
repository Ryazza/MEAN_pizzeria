let Dessert = require('../models/dessert.model')

exports.allDessert = async () => {
    let Desserts = await Dessert.find({});
    if(Desserts != null) {
        return Desserts
    } else {
        return({
            success: false
        })
    }
}
exports.oneDessert = async (idDessert) => {
    let Desserts = await Dessert.findOne({_id: idDessert});
    if(Desserts != null) {
        return Desserts
    } else {
        return({
            success: false
        })
    }
}
