const mongoose = require('mongoose');

const EaringSchema = new mongoose.Schema({
    id:{
        type: String,
        trim: true,
    },
    Img_src1: {
        type: String,
        trim: true,
    },
    Img_src2: {
        type: String,
        trim: true,
    },
    Img_src3: {
        type: String,
        trim: true,
    },
    Img_src4: {
        type: String,
        trim: true,
    },
    item_name: {
        type: String,
        trim: true,
    },
    item_price: {
        type: String,
        trim: true,
    },
    description: {
        type: String,
        trim: true,
    }
});

const Earring = mongoose.model('Earring', EaringSchema)

module.exports = Earring;