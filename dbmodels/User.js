const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

mongoose.connect('mongodb+srv://root:root@cluster0.ed5hb.mongodb.net/UsersDB').then(console.log("Successful connection!"));

const userSchema = {
    first_name: String,
    last_name: String,
    email: String,
    password: String
}

const User = mongoose.model('User', userSchema);


module.exports = User;