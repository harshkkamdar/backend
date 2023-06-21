const mongoose = require('mongoose');

const FormSchema = new mongoose.Schema({
    name:{
        type: String,
        trim: true,
    },
    age: {
        type: String,
        trim: true,
    },
    email: {
        type: String,
        trim: true,
    },
    number: {
        type: String,
        trim: true,
    },
    school_name: {
        type: String,
        trim: true,
    },
    grade: {
        type: String,
        trim: true,
    }
});

const Cart = mongoose.model('Cart', FormSchema)

module.exports = Cart;