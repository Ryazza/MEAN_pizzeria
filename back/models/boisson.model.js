const mongoose = require('mongoose');

const boissonSchema  = new mongoose.Schema({
    nom: {
        type: String,
        required: true
    },
    photo: {
        type: String,
        required: true
    },
    quantity: {
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

const Boisson = mongoose.model('boissons', boissonSchema);

module.exports = Boisson;
