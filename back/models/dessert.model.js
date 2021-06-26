const mongoose = require('mongoose');

const dessertSchema  = new mongoose.Schema({
    nom: {
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
        type: Number,
        required: true
    },
    categorie: {
        type: String,
        required: true
    }
});

const Dessert = mongoose.model('desserts', dessertSchema);

module.exports = Dessert;
