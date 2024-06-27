const express = require('express');
const router = express.Router();
const path = require('path');

router.get('/honda', (req, res) => {
    res.sendFile(path.join(__dirname,'..','/public/honda.html'));
})

router.get('/honda/civic', (req,res) => {
    res.sendFile(path.join(__dirname,'..','/public/hondaViews/civic.html'))
});

router.get('/honda/civic-type-r', (req,res) => {
    res.sendFile(path.join(__dirname,'..','/public/hondaViews/typer.html'))
});

router.get('/honda/crv', (req,res) => {
    res.sendFile(path.join(__dirname,'..','/public/hondaViews/crv.html'))
});

router.get('/honda/crv24', (req,res) => {
    res.sendFile(path.join(__dirname,'..','/public/hondaViews/crv2024.html'))
});

router.get('/honda/accord', (req,res) => {
    res.sendFile(path.join(__dirname,'..','/public/hondaViews/accord.html'))
});

module.exports = router;