const express = require("express");
const app = express();
const logger = require("morgan");
const routes = require('./router/routes');
// const { spawn } = require('child_process');

const port = process.env.PORT || 3030;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(logger("dev"));

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept",
    );
    res.header("Access-Control-Allow-Methods", "*")
    res.set("Content-Type", "application/json");
    next();
});


app.use("/routes", routes);

app.get("/", (req, res) => {
    res.status(200).send(`Welcome to KAY`);
});

app.get("*", (req, res) => {
    res.status(404).send(`Page Not Found`);
});

app.use((err, res) => {
    res.status(500).send(err);
});

app.listen(port, () => {
    console.log("Express server is running on port ", port);
});