const { Schema, model } = require('mongoose');

const scenarioConfigSchema = new Schema({
    scenarioConfigData: {
        type: Object,
        required: true
    }
})

module.exports = model('scenario configurations', scenarioConfigSchema);