const express = require('express');
const router = express.Router();
const path = require('path');

router.get('/jeep', (req, res) => {
    res.sendFile(path.join(__dirname,'..','/public/jeep.html'));
})

router.get('/jeep/wrangler20', (req,res) => {
    res.sendFile(path.join(__dirname,'..','/public/jeepViews/wrangler2020.html'))
});

router.get('/jeep/wrangler22', (req,res) => {
    res.sendFile(path.join(__dirname,'..','/public/jeepViews/wrangler2022.html'))
});

router.get('/jeep/wrangler24', (req,res) => {
    res.sendFile(path.join(__dirname,'..','/public/jeepViews/wrangler2024.html'))
});

router.get('/jeep/rubicon22', (req,res) => {
    res.sendFile(path.join(__dirname,'..','/public/jeepViews/rubicon2022.html'))
});

router.get('/jeep/rubicon24', (req,res) => {
    res.sendFile(path.join(__dirname,'..','/public/jeepViews/rubicon2024.html'))
});

module.exports = router;