const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const receiptSchema = new Schema({
    foodname: String,
    price: Number,
    image: String,
    quality: Number,
    description: String
});

module.exports = mongoose.model('receipt', receiptSchema, 'receipts');