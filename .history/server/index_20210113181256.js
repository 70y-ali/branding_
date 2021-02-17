const express = require("express");
const mysql = require("mysql");
const cors = require("cors");

const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const session = require("express-session");

// require('dotenv').config({path: '../server/env'});

// const path = require('path');
// require('dotenv').config({
//   path: path.resolve('env'),
// });

const bcrypt = require('bcrypt');
const saltRound = 10;

const app = express();

//api ийн тохиргоог process.env рүү ачааллах
// dotenv.config({ path: '../server/env'})

app.use(express.json());
app.use(cors({
    origin: ["https://localhost:8000"],
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
    database: "vote_app"
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

app.get("/login", (req, res) => {
    if(req.session.user){
        res.send({loggedIn: true, user: res.sesion.user})
    }else{
        res.send({loggedIn: false})
    }
})

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
                        req.session.user = result;
                        console.log(req.session.user);
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

app.listen(8000, () => {//3001
    console.log("RUNNING SERVER");
    console.log(app.get("env")) 
    console.log(console.log(`EXPRESS SERVER ${process.env.PORT} порт дээр аслаа`))
})