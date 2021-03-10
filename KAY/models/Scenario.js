const { Schema, model } = require('mongoose');

const scenarioSchema = new Schema({
    scenarioName: {
        type: String,
        required: true
    }
})

module.exports = model('scenarios', scenarioSchema);