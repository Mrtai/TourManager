const mongoose = require('mongoose');

const ContactSchema = new mongoose.Schema({
    idplace : String,
    name : String,
    idpronvice : String
});

const ContactModel = mongoose.model('touristplaces', ContactSchema);

module.exports = ContactModel;