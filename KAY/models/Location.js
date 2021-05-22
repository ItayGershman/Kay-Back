const { Schema, model } = require('mongoose');

const locationSchema = new Schema({
    locationName: {
        type: String,
        required: true
    },
    toPosition: {
        type: String,
        required: true
    },
    x: {
        type: Number,
        required: true
    },
    y: {
        type: Number,
        required: true
    },
    RFID:{
        type: String,
        required: true
    }
})

module.exports = model('locations', locationSchema);