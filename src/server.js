'use strict';

const express = require('express');
const stamper = require('../middlewares/stamper');
const notFoundHandler = require('../handlers/404');
const errorHandler = require('../handlers/500');

const app = express();

app.get("/", (req, res) => {
    res.status(200).send('Welcome to advance course');
});

app.get("/data",(req,res)=>{
    res.json({
        id:1,
        first_name:'Tasneem',
        last_name:'Maqableh',
        email:'tasneem.123@gmail.com'
    });
});

app.get('/test', stamper, (req, res) => {
    res.json({
        id: 3,
        name: 'teststudent',
        email: 'test@gmail.com',
        time: req.timeStamp
    });
});

app.get('/bad', (req, res) => {
    let num = 20;
    let result = num.forEach((y) => {
        console.log(y);
    });
    res.status(500).send(result);
})

app.use('*', notFoundHandler);
app.use(errorHandler);

function start(PORT){
    app.listen(PORT ,()=>{
        console.log(`i'm listening on port ${PORT}`);
    })
}

module.exports ={
    app: app,
    start: start,
}