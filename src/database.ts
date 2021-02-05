import mongoose from 'mongoose'

mongoose.connect('mongodb://localhost/ncb', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(db => console.log("Banco de dados conectado"))
    .catch(err => console.log(err));