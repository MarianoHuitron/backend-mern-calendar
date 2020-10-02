const mongoose = require('mongoose');

const dbConnection = async () => {

    try {
        await mongoose.connect(process.env.DB_CNN, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true,
            useFindAndModify: true
        });

        console.log('DB connected')

    } catch (error) {
        console.log(error);
        throw new Error('Error al inicializar BD')
    }

}

module.exports = {
    dbConnection
}