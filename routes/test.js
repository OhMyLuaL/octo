"use strict";
const express = require("express");
let router = express.Router();

router.use(function(req, res, next){
    console.log(req.url, "@", Date.now());
    next();
});

//routing
router
    .route("/endpoint")
    .get((req, res) => {
        res.send("Hi, get");
    })
    .post((req, res) => {
        res.send("hi, post");
    });


//routing too
router
.route("/endpoint/:endpointid")
.get((req, res) =>{
    res.send("hi, get  endpoint id" + req.params.endpointid);
})
.put((req, res) => {
    res.send("hi, put  endpoint id" + req.params.endpointid);
});

module.exports = router;
