const {Schema, model} = require('mongoose')

const juegoSchema = new Schema ({
    name: {type: String, require: true}
},{
    timestamps: true,
    versionKey: false
})

module.exports = model('Juego',juegoSchema)