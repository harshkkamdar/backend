const mongoose = require('mongoose');

const AddressSchema = new mongoose.Schema({
    first_name:{
        type: String,
        trim: true,
    },
    last_name: {
        type: String,
        trim: true,
    },
    mobile: {
        type: String,
        trim: true,
    },
    street: {
        type: String,
        trim: true,
    },
    apt: {
        type: String,
        trim: true,
    },
    zip: {
        type: String,
        trim: true,
    },
    city: {
        type: String,
        trim: true,
    },
    state: {
        type: String,
        trim: true,
    }
});

const Address = mongoose.model('Address', AddressSchema)

module.exports = Address;