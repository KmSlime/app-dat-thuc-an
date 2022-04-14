const express = require('express');
const app = express();
const mongoose = require('mongoose');
const Receipt = require('./models/Receipt');
app.use(express.json());

//CRUD Operations 


// app.get('api/ReceiptApi/read', async function(req, res){
//     const receipt = await Receipt.find().exec();
//     res.status(200).json(receipt);

// });


// //Post receipt
// app.post('api/Receipt/post', async function(req, res){
//     const receipt = new Receipt({
//         foodname: req.body.foodname,
//         price: req.body.price,
//         image: req.body.image,
//         quality: req.body.quality,
//         description: req.body.description
//     });

//     try {
//         await receipt.save();
//         res.status(200).json({"success": true, "message":"Receipt details saved"});

//     } catch (err) {
//         res.status(400).json({"success": false, "message":"Receipt in saving user details"});
//     }

// });

app.listen(3000, () => console.log('Listening on Port 3000'));
