const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const { application } = require("express");

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

app.get("/health", (_, res) => res.send("Test health status"));

app.listen(3001, () => {
    console.log("Server running on port 3001");
});