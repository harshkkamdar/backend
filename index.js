const express = require('express');
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
        //res.send("TEST");
        Form.find({})
            .then(user => res.send(user))
            .catch((err) => console.log(err))
    });

    //Add an item
    app.post('/form', (req, res) => {
        (new Form({
            'name': req.body.name,
            'age': req.body.age,
            'email': req.body.email,
            'number': req.body.number,
            'school_name': req.body.school_name,
            'grade': req.body.grade,
        }))
            .save()
            .then(user => res.send(user))
            .catch((err) => console.log(err))
    });

    //Get 1 item
    app.get('/form/:item_name', (req, res) => {
        Form.find({ item_name: req.params.name })
            .then(user => res.send(user))
            .catch((err) => console.log(err))
    });

    //Updating form
    app.patch('/form/:name', (req, res) => {
        Form.findOneAndUpdate({ 'name': req.params.name }, { $set: req.body })
            .then(user => res.send(user))
            .catch((err) => console.log(err))
    });

    //delete item
    app.delete('/form/:name', (req, res) => {
        Form.findOneAndDelete({ 'name': req.params.name })
            .then(user => res.send(user))
            .catch((err) => console.log(err))
    })
}

app.listen(process.env.port || 3000, function () {
    console.log('now listening for requests');
});


/* // Import packages
const express = require("express");
const home = require("./routes/home");

// Middlewares
const app = express();
app.use(express.json());

// Routes
app.use("/home", home);

// connection
const port = process.env.PORT || 9001;
app.listen(port, () => console.log(`Listening to port ${port}`)); */