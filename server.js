// environment values
require('dotenv').config()

//import Express
const express = require('express')
    // link between front & back
const cors = require('cors')
    // to json
const BodyParser = require('body-parser')
    //import mongoose db 3rd party model and nosql database language
const mongoose = require('mongoose')
    // import env values from config
const port = process.env.PORT || 5000
    // connect to db
mongoose.connect("mongodb+srv://ichrakfriji:12345678i@cluster0.gpc8v.mongodb.net/devstore?retryWrites=true&w=majority", { useNewUrlParser: true, useUnifiedTopology: true },

        () => console.log('DB connected...')

    )
    //var app=express
const app = express()
    // configure Cors
app.use(cors())
app.use(BodyParser.json())
    //Routes
app.use('/api/user', require('./Routes/Auth.js'));
app.use('/api/product', require('./Routes/produits.js'));
app.use('/api/support', require('./Routes/support.js')); // contact

//test server
app.listen(5000, () => console.log("Server Running..." + port))