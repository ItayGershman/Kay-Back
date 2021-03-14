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
        "Origin, X-Requested-With, Content-Type, Accept"
    );
    res.set("Content-Type", "application/json");
    next();
});


app.use("/routes", routes);

app.get("/", (req, res) => {
    res.status(200).send(`Welcome to KAY`);
});



//Check python script
// app.get('/python', (req, res) => {

//     var dataToSend;
//     // spawn new child process to call the python script
//     const python = spawn('python', ['script.py', 'Aviel', 'Itay']);
//     // collect data from script
//     python.stdout.on('data', function (data) {
//         console.log('Pipe data from python script ...');
//         dataToSend = data.toString();
//     });
//     // in close event we are sure that stream from child process is closed
//     python.on('close', (code) => {
//         console.log(`child process close all stdio with code ${code}`);
//         // send data to browser
//         // res.send(dataToSend)
//         console.log(dataToSend)
//         res.json(dataToSend)
//     });
// })

app.get("*", (req, res) => {
    res.status(404).send(`Page Not Found`);
});

app.use((err, res) => {
    res.status(500).send(err);
});

app.listen(port, () => {
    console.log("Express server is running on port ", port);
});