const mongoose = require('mongoose')
var schema = mongoose.Schema
ContactSchema = new schema({


    Message: { type: String, required: true },
    subject: { type: String, required: false },
    Email: { type: String, required: true },
    fullName: { type: String, required: true },
    date: { type: Date, required: false, default: new Date().toDateString() }
})


var SupportMessage = mongoose.model('Contacts', ContactSchema)
module.exports = SupportMessage;