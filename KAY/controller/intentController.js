const Intent = require('../models/Intent')

exports.intentController = {
    async createIntent(req, res) {
        try {
            intent = new Intent({
                scenarioConnection: req.body.scenarioConnection,
                intentName: req.body.intentName,
                outputTextIntent: req.body.outputTextIntent,
                entities: req.body.entities
            });
            await intent.save(err => {
                if (err) {
                    res.status(500).send(`${err}`);
                } else {
                    res.status(200).json(intent)
                }
            });
        } catch (err) {
            console.log(err)
            res.status(500).send(err)
        }
    },
    async getIntent(req, res) {
        try {
            const intent = await Intent.findOne({ scenarioConnection: req.params.scenarioConnection, intentName: req.params.intentName })
            if (intent) res.status(200).json(intent)
            else res.status(400).send(`Did not find intent with this name scenario connection`);
        } catch (err) {
            console.log(err)
            res.status(500).send(err)
        }
    },
    async getAllIntents(req, res) {
        try {
            const filter={}
            const intent = await Intent.find(filter)
            if (intent) res.status(200).json(intent)
            else res.status(400).send(`Did not find intent in the colletion`);
        } catch (err) {
            console.log(err)
            res.status(500).send(err)
        }
    },
    async getIntentsByScenraio(req, res) {
        try {
            const intent = await Intent.find({scenarioConnection: req.params.scenarioConnection})
            if (intent) res.status(200).json(intent)
            else res.status(400).send(`Did not find intent in the colletion`);
        } catch (err) {
            console.log(err)
            res.status(500).send(err)
        }
    },
    async setIntent(req, res) {
        try {
            if (req.params.scenarioConnection === undefined || req.params.intentName === undefined)
                return res.status(400).send(`Scenario connection or Intent name is wrong`);
            await Intent.updateOne(
                { scenarioConnection: req.params.scenarioConnection, intentName: req.params.intentName },
                {
                    $set: {
                        scenarioConnection: req.body.scenarioConnection,
                        intentName: req.body.intentName,
                        outputTextIntent: req.body.outputTextIntent,
                        entities: req.body.entities
                    }
                },
                (err, result) => {
                    if (err) res.status(400).send(`${err}`)
                    else {
                        return res.status(200).json(true);
                    }
                }
            );
        } catch (err) {
            console.log(err)
            res.status(500).send(`${err}`);
        }
    },
    async deleteIntent(req, res) {
        try {
            if (req.params.scenarioConnection === undefined || req.params.intentName === undefined)
                return res.status(400).send(`Scenario name is wrong`);
            await Intent.deleteOne(
                { scenarioConnection: req.params.scenarioConnection, intentName: req.params.intentName },
                (err, result) => {
                    if (err) res.status(400).send(`${err}`)
                    else {
                        return res.status(200).send(`Intent of Scenarion Deleted Successfuly`);
                    }
                }
            );
        } catch (err) {
            console.log(err)
            res.status(500).send(`${err}`);
        }
    },
}