const express = require('express');
const router = express.Router();
const path = require('path');

router.get('/cars', (req, res) => {
    res.sendFile(path.join(__dirname,'..','/public/cars.html'))
})

module.exports = router;