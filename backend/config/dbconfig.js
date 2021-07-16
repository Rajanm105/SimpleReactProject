const mongoose = require('mongoose');

module.exports.connect = () => {
    mongoose.connect('mongodb://127.0.0.1:27017/appointmentdb', {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true
    }, () => {
        console.log('Mongodb Database Connected.....')
    });
}