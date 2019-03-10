require('./config/config');

// const _ = require('lodash');
const express = require('express');
const bodyPraser = require('body-parser');
const {ObjectID} = require('mongodb');
var cors = require('cors');

var {mongoose} = require('./db/mongoose');
var {Channel} = require('./models/channel');

var app = express();

app.use(cors());

const port = process.env.PORT || 3000;

app.use(bodyPraser.json());

app.get('/channels',(req,res) => {
    Channel.find().then((channels) => {
        res.send({channels});
    }, (e) => {
        res.status(400).send(e);
    })
})

app.listen(port, () => {
    console.log(`Started up at port ${port}`);
})

module.exports = {app};
