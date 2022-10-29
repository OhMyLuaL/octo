'use strict';

const express = require("express");
const app = express();
const port = process.env.port || 4444;
const test = require("./routes/test");

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