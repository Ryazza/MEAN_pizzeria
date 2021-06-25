const mongoose = require('mongoose');

const pizzaSchema  = new mongoose.Schema({
    nom: {
        type: String,
        required: true
    },
    miniature: {
        type: String,
        required: true
    },
    photo: {
        type: String,
        required: true
    },
    recette : {
        type: String,
        required: true
    },
    prices: {
        type: Array,
        required: true
    },
    categorie: {
        type: String,
        required: true
    }
});

const Pizza = mongoose.model('pizzas', pizzaSchema);

module.exports = Pizza;
