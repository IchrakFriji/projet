const mongoose = require('mongoose')
var schema = mongoose.Schema
userSchema = new schema({
    FirstName: { type: String, required: true },
    LastName: { type: String, required: true },
    Email: { type: String, required: true },
    Password: { type: String, required: true },
    userPhoto: { type: String, required: false, default: "" },
    Country: { type: String, required: true, default: "TUN" },
    State: { type: String, required: true, default: "Tunis" },
    Address: { type: String, required: true, default: "TUN" },
    Phone: { type: String, required: false },
    IsAdmin: { required: true, type: Boolean, default: false },
    DateInscription: { type: Date, required: false, default: new Date().toDateString() }





})


var User = mongoose.model('users', userSchema) //nom collection,verif coord
module.exports = User;