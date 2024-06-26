const express = require('express');
const app = express();
const User = require('./dbmodels/User');
const Reservation = require('./dbmodels/Reservation');
//const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path');
const bcrypt = require('bcrypt');
const cookieParser = require('cookie-parser');
const saltRounds = 10;
const session = require('express-session');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname,'/public')));
app.use(cookieParser());
app.use(session({
    secret: "jimenez",
    saveUninitialized: true,
    resave: true
}));


/* /* mongoose.connect('mongodb+srv://root:root@cluster0.ed5hb.mongodb.net/UsersDB').then(console.log("Successful connection!"));

const userSchema = {
    first_name: String,
    last_name: String,
    email: String,
    password: String
} 

const reservationSchema = {
    firstName: String,
    lastName: String,
    start_Rental: Date,
    end_Rental: Date
}

const User = mongoose.model('User', userSchema);
const Reservation = mongoose.model('Reservation', reservationSchema); */

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
app.get('/', (req,res) => {
    res.sendFile(path.join(__dirname, 'public/index.html'))
})

app.get('/signup', (req,res) => {
    res.sendFile(__dirname + '/signup.html');
});


app.post('/signup', async (req, res) => {
        let users = await new User({
            first_name: req.body.first_name,
            last_name: req.body.last_name,
            email: req.body.email,
            password: req.body.password 
        });
        
        bcrypt
            .hash(req.body.password, saltRounds)
            .then(async hash =>{
                let pass = await User.findOne({email:req.body.email})
                if(pass.password === req.body.password){
                    pass.password = hash;
                    console.log(pass.password);
                }
                pass.save();
            })
            .catch(err => console.error(err.message))

        users.save();
        res.status(201).json({message: "user successfully registered!"});
});


app.get('/login', (req, res) => {
    res.sendFile(__dirname + '/login.html')
});


app.post('/login', async (req, res) => {
    const result = await User.findOne({email: req.body.email})
    
    bcrypt.compare(req.body.password, result.password, function(err, resp){
        if(resp){
            /* res.status(201).json({message:"Welcome, " + result.first_name + ' ' + result.last_name }) */
            req.session.result = result;
            req.session.save();
            res.sendFile(path.join(__dirname , 'public/profile.html'))
        }
        else{
            res.send("Error. Try Again.")
        }
    })


        /* const result = await User.findOne({email: req.body.email})
        if (result.password === req.body.password){
            console.log("Logged in")
            res.status(201).json({message: "Welcome, " + result.first_name});
        } 

        else{
            console.log("Error logging in")
            res.status(401).json({message: "Sorry, Your Account infomation is incorrect"})
        } */

        /* req.session.result = result;
        req.session.save();
        return res.send("You are logged in!")   */
});


app.get('/profile', async (req, res) => {
    const result = await User.findOne({email: req.body.email})
    const sessionuser = req.session.result;
    res.send(sessionuser);
    res.sendFile(path.join(__dirname, 'public/profile.html'));  
})

app.get('/logout', (req, res) => {
    req.session.destroy();
    res.send("You are logged out!");
});

app.get('/cars', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/cars.html'));
})

app.get('/about', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/about.html'));
})

app.get('/tesla', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/tesla.html'));
})

app.get('/honda', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/honda.html'));
})

app.get('/toyota', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/toyota.html'));
})

app.get('/jeep', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/jeep.html'));
})

app.get('/bmw', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/bmw.html'));
})

app.get('/bookingpage', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/bookingpage.html'));
})

app.post('/bookingpage',async (req, res) => {
    let reservations = await new Reservation({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        start_Rental: req.body.startDate,
        end_Rental: req.body.endDate
    });
    reservations.save();

    res.status(201).json({message: "Congratulations " + reservations.firstName + "! Your Rental has been succesfully booked!"});
})

app.get('/tesla/modelX', (req,res) => {
    res.sendFile(path.join(__dirname,  'public/teslaViews/modelX.html'))
});

app.get('/tesla/modelY', (req,res) => {
    res.sendFile(path.join(__dirname,  'public/teslaViews/modelY.html'))
});

app.get('/tesla/modelS', (req,res) => {
    res.sendFile(path.join(__dirname,  'public/teslaViews/modelS.html'))
});

app.get('/tesla/model3', (req,res) => {
    res.sendFile(path.join(__dirname,  'public/teslaViews/model3.html'))
});

app.get('/tesla/cybertruck', (req,res) => {
    res.sendFile(path.join(__dirname,  'public/teslaViews/cybertruck.html'))
});

app.get('/honda/civic', (req,res) => {
    res.sendFile(path.join(__dirname,  'public/hondaViews/civic.html'))
});

app.get('/honda/civic-type-r', (req,res) => {
    res.sendFile(path.join(__dirname,  'public/hondaViews/typer.html'))
});

app.get('/honda/crv', (req,res) => {
    res.sendFile(path.join(__dirname,  'public/hondaViews/crv.html'))
});

app.get('/honda/crv24', (req,res) => {
    res.sendFile(path.join(__dirname,  'public/hondaViews/crv2024.html'))
});

app.get('/honda/accord', (req,res) => {
    res.sendFile(path.join(__dirname,  'public/hondaViews/accord.html'))
});

app.get('/toyota/rav4', (req,res) => {
    res.sendFile(path.join(__dirname,  'public/toyotaViews/rav4.html'))
});

app.get('/toyota/camry', (req,res) => {
    res.sendFile(path.join(__dirname,  'public/toyotaViews/camry.html'))
});

app.get('/toyota/camry24', (req,res) => {
    res.sendFile(path.join(__dirname,  'public/toyotaViews/camry2024.html'))
});

app.get('/toyota/tocoma', (req,res) => {
    res.sendFile(path.join(__dirname,  'public/toyotaViews/tocoma.html'))
});

app.get('/toyota/tocoma24', (req,res) => {
    res.sendFile(path.join(__dirname,  'public/toyotaViews/tocoma2024.html'))
});

app.get('/jeep/wrangler20', (req,res) => {
    res.sendFile(path.join(__dirname,  'public/jeepViews/wrangler2020.html'))
});

app.get('/jeep/wrangler22', (req,res) => {
    res.sendFile(path.join(__dirname,  'public/jeepViews/wrangler2022.html'))
});

app.get('/jeep/wrangler24', (req,res) => {
    res.sendFile(path.join(__dirname,  'public/jeepViews/wrangler2024.html'))
});

app.get('/jeep/rubicon22', (req,res) => {
    res.sendFile(path.join(__dirname,  'public/jeepViews/rubicon2022.html'))
});

app.get('/jeep/rubicon24', (req,res) => {
    res.sendFile(path.join(__dirname,  'public/jeepViews/rubicon2024.html'))
});
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
app.listen(8080,() => {
    console.log("Server is running on Port 8080");
});

module.exports = app;