const mongoose = require('mongoose');

const DemoSchema = new mongoose.Schema({
    name: {
        type: String,
    }
});

module.exports = Demo = mongoose.model("demo", DemoSchema);