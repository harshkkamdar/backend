const mongoose = require('mongoose');

const CardSchema = new mongoose.Schema({
    card_number:{
        type: String,
        trim: true,
    },
    card_valid: {
        type: String,
        trim: true,
    },
    security_code: {
        type: String,
        trim: true,
    },
    holder_name: {
        type: String,
        trim: true,
    }
});

const cart = mongoose.model('cart', CardSchema)

module.exports = cart;