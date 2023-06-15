/* const express = require('express');
const app = express();
const mongoose = require('./database/mongoose');
const Email = require('./database/models/newsletter');
const Form = require('./database/models/form');
const cors = require('cors');

app.use(express.json());
app.use(express.static('public'));

app.use(cors({
    origin: '*'
}));

//form APIs
{
    //Get All item
    app.get('/form', (req, res) => {
        Form.find({})
            .then(user => res.send(user))
            .catch((err) => console.log(err))
    });

    //Add an item
    app.post('/form', (req, res) => {
        (new Form({
            'name': req.body.name,
            'mobile': req.body.mobile,
            'email': req.body.Img_src2,
            'student_age': req.body.student_age,
            'student_name': req.body.student_name,
        }))
            .save()
            .then(user => res.send(user))
            .catch((err) => console.log(err))
    });

    //Get 1 item
    app.get('/form/:item_name', (req, res) => {
        Form.find({ item_name: req.params.item_name })
            .then(user => res.send(user))
            .catch((err) => console.log(err))
    });

    //Updating form
    app.patch('/form/:item_name', (req, res) => {
        Form.findOneAndUpdate({ 'item_name': req.params.item_name }, { $set: req.body })
            .then(user => res.send(user))
            .catch((err) => console.log(err))
    });

    //delete item
    app.delete('/form/:item_name', (req, res) => {
        Form.findOneAndDelete({ 'item_name': req.params.item_name })
            .then(user => res.send(user))
            .catch((err) => console.log(err))
    })
}

app.listen(process.env.port || 3000, function () {
    console.log('now listening for requests');
});

 */
// Import packages
const express = require("express");
const home = require("./routes/home");

// Middlewares
const app = express();
app.use(express.json());

// Routes
app.use("/home", home);

// connection
const port = process.env.PORT || 9001;
app.listen(port, () => console.log(`Listening to port ${port}`));