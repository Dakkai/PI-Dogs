const { Router } = require('express');
const dogs = require("./Dog_routs")
const temperament = require("./temperament_routs")
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use("/temperament",temperament)
router.use("/dogs",dogs)

module.exports = router;
