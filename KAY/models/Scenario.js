const { Schema, model } = require('mongoose');

const scenarioSchema = new Schema({
    scenarioName: {
        type: String,
        required: true
    },
    step: {
        type: Number
    }
})

module.exports = model('scenarios', scenarioSchema);