const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const sessions = require("express-session");
const cookieParser = require("cookie-parser");
const bcrypt = require("bcrypt");

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

const oneDay = 1000 * 60 * 60 * 24;
const saltRounds = 10;

app.use(sessions({
    key: "userID",
    secret: process.env.secret_key,
    saveUninitialized: true,
    cookie: { maxAge: oneDay },
    resave: false
}))

app.use(cookieParser());

app.use(bodyParser.json());

//app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());

mongoose.connect(
    `mongodb+srv://team-mald-cshub:${process.env.DB_PASSWORD}@team-mald-cshub.tfkwes7.mongodb.net/?retryWrites=true&w=majority`,
    {
        useNewUrlParser: true,
    }
);



app.get("/health", (_, res) => res.send("Test health status"));

app.post("/register", async (req, res) => {
    const username = req.body.username;
    const email = req.body.email;
    const password = req.body.password;
    const gender = req.body.gender;
    const age = req.body.age;
    const schoolYear = req.body.schoolYear;

    // console.log(req.body);
    // res.send(req.body.username)

    await bcrypt.hash(password, saltRounds, (err, hash) => {
        if (err) {
            console.log(err);
        }
        const q = new Users({ username: username, email: email, password: hash, gender: gender, age: age, schoolYear: schoolYear })
        try {
            const result = q.save().then((items) => res.json(items)).catch((err) => res.json({ message: "Username already exists!"}));
        
        } catch (err) {
            res.json(err);
        }
    })

})

app.get("/login", (req, res) => {
    if (req.session.username) {
        res.json({ loggedIn: true, username: req.session.username, session: req.session })
    } else {
        res.json({ loggedIn: false, session: req.session });
    }
})

app.post("/login", async (req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    const login = false;
    console.log(req.session);

    const q = Users.find({ username: username }).then(
        (items) => {
            console.log(items[0].password);
            bcrypt.compare(password, items[0].password).then((match) => {
                if (!match) {
                    res.json({ error: "Wrong username and password combination"});
                } else {
                    req.session.username = items[0].username;
                    console.log(req.session.username);
                    res.json(`Logged in! ${req.session.username}`);
                }
            })
        }

        ).catch((err) => res.json("User does not exist!"));

    

});

app.get("/logout", (req, res) => {
    req.session.destroy();
    res.json({ loggedIn: false });
})


app.get("/all-users", async (req, res) => {
    const q = Users.find({}).then((items) => res.json(items));
});

app.get("/all-events", async (req, res) => {
    const q = Events.find({}).then((items) => res.json(items));
})

app.listen(3001, () => {
    console.log("Server running on port 3001");
});