const express = require("express");
const mysql = require("mysql");
const cors = require("cors");

const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const session = require("express-session");

const bcrypt = require('bcrypt');
const saltRound = 10;

const app = express();

app.use(express.json());
app.use(cors({
    origin: ["https://localhost:3000"],
    methods:["GET", "POST"],
    credentials: true,
})
);
app.use(cookieParser());
app.use(bodyParser.urlencoded({extended: true}));

app.use(
    session({
        key: "userId",
        secret: "subcribe",
        resave: false,
        saveUninitialized: false,
        cookie:{
            expires: 60 * 60 * 24,
        },
    })
);

const db = mysql.createConnection({
    user: "root",
    host: "localhost",
    password: "",
    database: ""
});

app.post("/register", (req, res) =>{
    const username = req.body.username;
    const password = req.body.password;

    bcrypt.hash(password, saltRound, (err, hash)=> {
        if(err){
            console.log(err);
        }
        db.query(
            "INSERT INTO users (username, password) VALUES (?, ?)",
            [username, hash],
            (err, result) => {
                console.log(err);
            }
        );
    })
});

app.post("/login", (req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    db.query(
        "SLECT * FROM users WHERE username=? AND  password=?",
        username,
        (err, result) => {
            if(err){
                res.send({err: err});
            }

            if(result.length > 0) {
                bcrypt.compare(password, result[0].password, (err, response) => {
                    if(response){
                        res.send(result);
                    }else{
                        res.send({message: "wrong username/password combination!"});
                    }
                })
                res.send(result)
            }else{
                res.send({message: "username doesnt exist!"});
            }
        }
    );
});

app.listen(3001, () => {
    console.log("RUNNING SERVER");
})