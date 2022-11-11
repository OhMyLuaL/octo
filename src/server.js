'use strict';

const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
const test = require("../routes/authRoute");

app.use(express.json());
app.use("/test", test);

app.get("/", (req, res) => {

});

app.listen(port, err => {
    if(err){
        return console.log("ERROR", err);
    }
    console.log(`listening port on ${port}`);
});