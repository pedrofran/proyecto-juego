const mongoose = require('mongoose');
mongoose
    .connect('mongodb://localhost:27017/juegosdb')
    .then((db)=> console.log("DB is conected"))
    .catch(err => console.log(err));