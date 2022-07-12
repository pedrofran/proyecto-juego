const { Router } = require('express')
const router = Router()
const juegosController = require('../controllers/juegos.contoller')

router.get('/',juegosController.getJuegos)

module.exports = router