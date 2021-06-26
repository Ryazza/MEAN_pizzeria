const express = require('express');
const router = express.Router();
let BoissonController = require('../controllers/boisson.controller')

router.get('/', BoissonController.allDrink);

module.exports = router;
