const express = require('express');
const router = express.Router();
let PizzaController = require('../controllers/pizza.controller')

router.get('/', PizzaController.allPizza);
router.get('/:id', PizzaController.onePizza);

module.exports = router;
