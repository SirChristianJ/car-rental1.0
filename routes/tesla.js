const express = require('express');
const router = express.Router();
const path = require('path');

router.get('/tesla', (req, res) => {
    res.sendFile(path.join(__dirname,'..','/public/tesla.html'));
});

router.get('/tesla/modelX', (req,res) => {
    res.sendFile(path.join(__dirname,'..','/public/teslaViews/modelX.html'))
});

router.get('/tesla/modelY', (req,res) => {
    res.sendFile(path.join(__dirname,'..','/public/teslaViews/modelY.html'))
});

router.get('/tesla/modelS', (req,res) => {
    res.sendFile(path.join(__dirname,'..','/public/teslaViews/modelS.html'))
});

router.get('/tesla/model3', (req,res) => {
    res.sendFile(path.join(__dirname,'..','/public/teslaViews/model3.html'))
});

router.get('/tesla/cybertruck', (req,res) => {
    res.sendFile(path.join(__dirname,'..','/public/teslaViews/cybertruck.html'))
});

module.exports = router;