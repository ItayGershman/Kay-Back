const { Schema, model } = require('mongoose');

const scenarioSchema = new Schema({
    scenarioName: {
        type: String,
        required: true
    },
    scenarioDescription: {
        type: String
    },
    scenarioImage: {
        type: String
    }
})

module.exports = model('scenarios', scenarioSchema);