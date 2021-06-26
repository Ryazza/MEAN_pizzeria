const express = require('express');
const router = express.Router();
let DessertController = require('../controllers/dessert.controller')

router.get('/', DessertController.allDessert);
router.get('/:id', DessertController.oneDessert);

module.exports = router;
