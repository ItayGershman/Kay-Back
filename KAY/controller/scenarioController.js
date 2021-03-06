const Scenario = require('../models/Scenario')

exports.scenarioController = {
    async createScenario(req, res) {
        try {
            scenario = new Scenario({
                scenarioName: req.body.scenarioName,
                scenarioDescription: req.body.scenarioDescription,
                scenarioImage: req.body.scenarioImage
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
            const scenario = await Scenario.findOne({ scenarioName: req.params.scenarioName })
            if (scenario) res.status(200).json(scenario)
            else res.status(400).send(`Did not find scenario with this name`);
        } catch (err) {
            console.log(err)
            res.status(500).send(err)
        }
    },
    async getAllScenarios(req, res) {
        try {
            const filter = {}
            const scenario = await Scenario.find(filter)
            if (scenario) res.status(200).json(scenario)
            else res.status(400).send(`Did not find scenario in the collection`);
        } catch (err) {
            console.log(err)
            res.status(500).send(err)
        }
    },
    async setScenario(req, res) {
        try {
            if (req.params.scenarioName === undefined)
                return res.status(400).send(`Scenario name is wrong`);
            await Scenario.updateOne(
                { scenarioName: req.params.scenarioName },
                {
                    $set: {
                        scenarioName: req.body.scenarioName,
                        scenarioDescription: req.body.scenarioDescription,
                        scenarioImage: req.body.scenarioImage
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
            const scenario = await Scenario.findOne({ scenarioName: req.params.scenarioName })
            if (scenario === null) {
                return res.status(400).send(`Scenario name is wrong`);
            }
            await Scenario.deleteOne(
                { scenarioName: req.params.scenarioName },
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