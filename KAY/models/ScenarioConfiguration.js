const { Schema, model } = require('mongoose');

const scenarioConfigSchema = new Schema({
    scenarioConfigName: {
        type: String,
        required: true,
        unique: true
    },
    scenarioConfigData: {
        type: Object,
        required: true
    }
})

module.exports = model('scenario configurations', scenarioConfigSchema);