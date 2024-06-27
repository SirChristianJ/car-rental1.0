const express = require('express');
const router = express.Router();
const path = require('path');

router.get('/toyota', (req, res) => {
    res.sendFile(path.join(__dirname,'..','/public/toyota.html'));
});

router.get('/toyota/rav4', (req,res) => {
    res.sendFile(path.join(__dirname,'..','/public/toyotaViews/rav4.html'))
});

router.get('/toyota/camry', (req,res) => {
    res.sendFile(path.join(__dirname,'..','/public/toyotaViews/camry.html'))
});

router.get('/toyota/camry24', (req,res) => {
    res.sendFile(path.join(__dirname,'..','/public/toyotaViews/camry2024.html'))
});

router.get('/toyota/tocoma', (req,res) => {
    res.sendFile(path.join(__dirname,'..','/public/toyotaViews/tocoma.html'))
});

router.get('/toyota/tocoma24', (req,res) => {
    res.sendFile(path.join(__dirname,'..','/public/toyotaViews/tocoma2024.html'))
});

module.exports = router;