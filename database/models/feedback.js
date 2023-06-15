const mongoose = require('mongoose');

const FeedbackSchema = new mongoose.Schema({
    name: {
        type: String,
        trim: true,
    },
    feedback: {
        type: String,
        trim: true,
    },
});

const feedback = mongoose.model('feedback', FeedbackSchema)

module.exports = feedback;