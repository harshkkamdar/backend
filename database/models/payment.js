const mongoose = require('mongoose');

const PaymentSchema = new mongoose.Schema({
    name: {
        type: String,
        trim: true,
    },
    amount_payed: {
        type: String,
        trim: true,
    },
});

const payment = mongoose.model('payment', PaymentSchema)

module.exports = payment;