const Scenario = require('../models/Scenario')
console.log('inside controller')
exports.scenarioController = {
    async createScenario(req, res) {
        try {
            scenario = new Scenario({
                scenarioName: req.body.scenarioName,
                outputOptions: req.body.outputOptions,
                receiveIntent: req.body.receiveIntent,
                scenarioActions: req.body.scenarioActions,
                kayDestination: req.body.kayDestination,
                // children: req.body.conversationSchema
            });
            await scenario.save(err => {
                if (err) {
                    res.status(500).send(`${err}`);
                } else {
                    res.status(200).json(scenario)
                }
            });
        } catch (err) {
            console.log(err)
            res.status(500).send(err)
        }
    },
    async getScenario(req, res) {
        try {
            const scenario = await Scenario.findOne({ scenarioName: req.body.scenarioName })
            if (scenario) res.status(200).json(scenario.scenarioName)
            else res.status(400).send(`Did not find scenario with this name`);
        } catch (err) {
            console.log(err)
            res.status(500).send(err)
        }
    },
    async setScenario(req, res) {
        try {
            if (req.body.scenarioName === undefined)
                return res.status(400).send(`Scenario name is wrong`);
            await Scenario.updateOne(
                { scenarioName: req.body.scenarioName },
                {
                    $set: {
                        scenarioName: req.body.scenarioName,
                        outputOptions: req.body.outputOptions,
                        receiveIntent: req.body.receiveIntent,
                        scenarioActions: req.body.scenarioActions,
                        kayDestination: req.body.kayDestination,
                        // children: req.body.conversationSchema
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
    async deleteScenario(req, res) {
        try {
            if (req.body.scenarioName === undefined)
                return res.status(400).send(`Scenario name is wrong`);
            await Scenario.deleteOne(
                { scenarioName: req.body.scenarioName },
                (err, result) => {
                    if (err) res.status(400).send(`${err}`)
                    else {
                        return res.status(200).send(`Scenario Deleted Successfuly`);
                    }
                }
            );
        } catch (err) {
            console.log(err)
            res.status(500).send(`${err}`);
        }
    },
}