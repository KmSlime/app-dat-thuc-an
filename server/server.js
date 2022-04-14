const express = require('express');
const app = express();
const mongoose = require('mongoose');
const User = require('./models/User');
const Receipt = require('./models/Receipt');
app.use(express.json());

app.get('/home', function(req, res){
    res.send('Home Screen');
});

//Connecting to DB
mongoose.connect('mongodb://localhost:27017/orderfood',
    { useNewUrlParser: true },
    function (){
        console.log('connected to database');
    } 
);

//CRUD Operations

//get all users
app.get('/read', async function(req, res){
    const users = await User.find().exec();
    res.status(200).json(users);

});


//Post user data
app.post('/post', async function(req, res){
    const user = new User({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
    });

    try {
        await user.save();
        res.status(200).json({"success": true, "message":"User details saved"});

    } catch (err) {
        res.status(400).json({"success": false, "message":"Error in saving user details"});
    }

});

app.get('/ReceiptApi/read', async function(req, res){
    const receipt = await Receipt.find().exec();
    res.status(200).json(receipt);

});

//verirfy login
app.post('/login', async function(req, res){
    
    $email = 'devtest1@gmail.com';
    $password = '12345'; 
    
    if(req.body.email === $email && req.body.password === $password){
        res.status(200).json({"success": true, "message":"Login is successful"});
    }
});


app.post('/Receipt/post', async function(req, res){
    const receipt = new Receipt({
        foodname: req.body.foodname,
        price: req.body.price,
        image: req.body.image,
        quality: req.body.quality,
        description: req.body.description
    });

    try {
        await receipt.save();
        res.status(200).json({"success": true, "message":"Receipt details saved"});

    } catch (err) {
        res.status(400).json({"success": false, "message":"Receipt in saving user details"});
    }

});


app.listen(3000, () => console.log('Listening on Port 3000'));