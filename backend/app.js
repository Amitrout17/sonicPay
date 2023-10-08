const express = require("express");
const app = express();
const bodyParser = require("body-parser");

const cors = require("cors");

app.use(express.json());

//env file
require("dotenv").config({ path: "backend/config/.env" });

// Frontend port request access
app.use(
  cors({
    origin: "http://localhost:3000",
    methods: ["POST", "PUT", "GET", "OPTIONS", "HEAD"],
    credentials: true,
  })
);

const cookieParser = require("cookie-parser");

//router imports
const mainRouter = require("./routes/gateWayRouter");

app.use(express.json()); //Or else mongoose will show validation error every time any thing is added to data base
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(mainRouter);

module.exports = app;
