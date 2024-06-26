const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

mongoose.connect('mongodb+srv://root:root@cluster0.ed5hb.mongodb.net/UsersDB').then(console.log("Successful connection!"));

const reservationSchema = {
    firstName: String,
    lastName: String,
    start_Rental: Date,
    end_Rental: Date
}

const Reservation = mongoose.model('Reservation', reservationSchema);

module.exports = Reservation;