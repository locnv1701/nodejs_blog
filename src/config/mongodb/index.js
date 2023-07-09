const mongoose = require('mongoose');

async function connect() {
    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/nodejs_test', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('Connected mongodb db nodejs_test!')
    } catch (err) {
        console.log('Connect mongodb failure!!!', err)

    }
}


module.exports = { connect };