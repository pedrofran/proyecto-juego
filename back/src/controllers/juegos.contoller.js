juegosController = {}

const Juego =  require("../models/Juegos")

juegosController.getJuegos = async (req,res) => {
    const juegos = await Juego.find()
    res.send(juegos);
}

module.exports = juegosController;