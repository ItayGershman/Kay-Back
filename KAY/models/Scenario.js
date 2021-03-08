const { Schema, model } = require('mongoose');

const scenarioSchema = new Schema({
    scenarioName: {
        type: String,
        required: true
    },
    step: {
        type: Number
    },
    // recivedIntent: {
    //     type: String,
    //     name: String
    // },
    // scenarioActions: [{ // need to be array of actionschema
    //     type: Array,
    //     required: true,
    //     title: String,
    //     titleID: Number,
    //     deviceName: String,
    //     deviceID: Number
    // }],
    // kayDestination: [{
    //     type: Array
    // }],
    // children: {
    //     type: Array,
    //     scenarioData: Object
    // }
})

module.exports = model('scenarios', scenarioSchema);