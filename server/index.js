const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
require('dotenv').config();

const { Users } = require("./modules/Users.js");
const { Events } = require("./modules/Events.js");

const app = express();

app.use(
    cors({
        origin: ["http://localhost:3000"],
        credentials: true,
        optionSuccessStatus: 200,
    })
);

app.use(bodyParser.json());
app.use(express.json());

mongoose.connect(
    `mongodb+srv://team-mald-cshub:uELfjj8RubD8cCZb@team-mald-cshub.tfkwes7.mongodb.net/?retryWrites=true&w=majority`,
    {
        useNewUrlParser: true,
    }
);



app.get("/health", (_, res) => res.send("Test health status"));

app.get("/all-users", async (req, res) => {
    const q = Users.find({}).then((items) => res.json(items));
});

app.get("/all-events", async (req, res) => {
    const q = Events.find({}).then((items) => res.json(items));
})

app.listen(3001, () => {
    console.log("Server running on port 3001");
});