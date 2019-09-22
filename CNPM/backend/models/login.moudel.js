const mongoose = require('mongoose');

const ContactSchema = new mongoose.Schema({
    username : String,
    password : String,
});

const ContactModel = mongoose.model('users', ContactSchema);
module.exports = ContactModel;