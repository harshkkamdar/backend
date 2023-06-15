const mongoose = require('mongoose');

const FormSchema = new mongoose.Schema({
    name:{
        type: String,
        trim: true,
    },
    mobile: {
        type: String,
        trim: true,
    },
    email: {
        type: String,
        trim: true,
    },
    student_age: {
        type: String,
        trim: true,
    },
    student_name: {
        type: String,
        trim: true,
    }
});

const Cart = mongoose.model('Cart', FormSchema)

module.exports = Cart;