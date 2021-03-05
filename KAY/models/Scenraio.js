const { Schema, model } = require('mongoose');

const scenarioSchema = new Schema({
    scenarioName: {
        type: String,
        required: true
    },
    outputOptions:[ {
        type: Array,
        required: true
    }],
    receiveIntent: {
        type: String,
        required: true
    },
    scenarioActions: [{
        type: Array,
        required: true,
        title: String,
        titleID: Number,
        deviceName: String,
        deviceID: Number
    }],
    kayDestination: [{
        type:Array
    }],
    children: conversationSchema
})

module.exports = model('scenarios', scenarioSchema);