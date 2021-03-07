const { Schema, model } = require('mongoose');

const locationSchema = new Schema({
    locationName: {
        type: String,
        required: true
    },
    fromPosition: {
        type: String,
        required: true
    },
    xFromCurrPosition: {
        type: Number,
        required: true
    },
    yFromCurrPosition: {
        type: Number,
        required: true
    }
})

module.exports = model('locations', locationSchema);