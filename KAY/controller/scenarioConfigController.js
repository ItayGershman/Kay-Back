const ScenarioConfig = require('../models/ScenarioConfiguration')

exports.scenarioConfigController = {
    async createScenarioConfig(req, res) {
        try {
            scenario = new ScenarioConfig({
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
            const scenario = await ScenarioConfig.findById({ _id: req.params._id })
            if (scenario) res.status(200).json(scenario)
            else res.status(400).send(`Did not find scenario with this name`);
        } catch (err) {
            console.log(err)
            res.status(500).send(err)
        }
    },
    // async setScenario(req, res) {
    //     try {
    //         if (req.params.scenarioName === undefined)
    //             return res.status(400).send(`Scenario name is wrong`);
    //         await Scenario.updateOne(
    //             { scenarioName: req.params.scenarioName },
    //             {
    //                 $set: {
    //                     scenarioName: req.body.scenarioName,
    //                 }
    //             },
    //             (err, result) => {
    //                 if (err) res.status(400).send(`${err}`)
    //                 else {
    //                     return res.status(200).json(true);
    //                 }
    //             }
    //         );
    //     } catch (err) {
    //         console.log(err)
    //         res.status(500).send(`${err}`);
    //     }
    // },
    // async deleteScenario(req, res) {
    //     try {
    //         if (req.body.scenarioName === undefined)
    //             return res.status(400).send(`Scenario name is wrong`);
    //         await Scenario.deleteOne(
    //             { scenarioName: req.body.scenarioName },
    //             (err, result) => {
    //                 if (err) res.status(400).send(`${err}`)
    //                 else {
    //                     return res.status(200).send(`Scenario Deleted Successfuly`);
    //                 }
    //             }
    //         );
    //     } catch (err) {
    //         console.log(err)
    //         res.status(500).send(`${err}`);
    //     }
    // },
}