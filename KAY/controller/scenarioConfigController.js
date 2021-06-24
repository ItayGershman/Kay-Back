const ScenarioConfig = require('../models/ScenarioConfiguration')

exports.scenarioConfigController = {
    async createScenarioConfig(req, res) {
        try {
            scenario = new ScenarioConfig({
                scenarioConfigName: req.body.scenarioConfigName,
                scenarioConfigData: req.body.scenarioConfigData,
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
    async getScenarioConfig(req, res) {
        try {
            console.log(req.params.scenarioConfigName)
            const scenario = await ScenarioConfig.findOne({ scenarioConfigName: req.params.scenarioConfigName })
            console.log(scenario)
            if (scenario) res.status(200).json(scenario)
            else res.status(400).send(`Did not find scenario config with this name`);
        } catch (err) {
            console.log(err)
            res.status(500).send(err)
        }
    },
    async setScenarioConfig(req, res) {
        try {
            if (req.params.scenarioConfigName === undefined)
                return res.status(400).send(`scenarioConfigName is wrong`);
            await ScenarioConfig.updateOne(
                { scenarioConfigName: req.params.scenarioConfigName },
                {
                    $set: {
                        scenarioConfigName: req.body.scenarioConfigName,
                        scenarioConfigData: req.body.scenarioConfigData,
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
    async deleteScenarioConfig(req, res) {
        try {
            if (req.params.scenarioConfigName === undefined)
                return res.status(400).send(`scenarioConfigName is wrong`);
            await ScenarioConfig.deleteOne(
                { scenarioConfigName: req.params.scenarioConfigName },
                (err, result) => {
                    if (err) res.status(400).send(`${err}`)
                    else {
                        return res.status(200).send(`Scenario config Deleted Successfuly`);
                    }
                }
            );
        } catch (err) {
            console.log(err)
            res.status(500).send(`${err}`);
        }
    },
}