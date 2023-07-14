const express = require('express');
const app = express();
const mongoose = require('./database/mongoose');
const Our = require('./database/models/Our_Data');
const cors = require('cors');

app.use(express.json());
app.use(express.static('public'));

app.use(cors({
    origin: '*'
}));

//our APIs
{
    //Get All item
    app.get('/our', (req, res) => {
        //res.send("TEST");
        Our.find({})
            .then(user => res.send(user))
            .catch((err) => console.log(err))
    });

    //Add an item
    app.post('/our', (req, res) => {
        (new Our({
            'SrNo': req.body.SrNo,
            'Item_Name': req.body.Item_Name,
            'Drug_Name': req.body.Drug_Name,
            'Manufacturer': req.body.Manufacturer,
            'UOM': req.body.UOM,
            'Unit_Price': req.body.Unit_Price,
            'MRP': req.body.MRP,
            'Order_Qty': req.body.Order_Qty,
        }))
            .save()
            .then(user => res.send(user))
            .catch((err) => console.log(err))
    });

    //Get 1 item
    app.get('/our/:item_name', (req, res) => {
        Our.find({ item_name: req.params.name })
            .then(user => res.send(user))
            .catch((err) => console.log(err))
    });

    //Updating our
    app.patch('/our/:name', (req, res) => {
        Our.findOneAndUpdate({ 'name': req.params.name }, { $set: req.body })
            .then(user => res.send(user))
            .catch((err) => console.log(err))
    });

    //delete item
    app.delete('/our/:name', (req, res) => {
        Our.findOneAndDelete({ 'name': req.params.name })
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