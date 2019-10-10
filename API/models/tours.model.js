const mongoose = require('mongoose');

const ContactSchema = new mongoose.Schema({
    id_tour: String,
    id_type: String,
    name_tour: String,
    day: Number,
    seats: Number,
    image : String,
    rating : Number,
});

const ContactModel = mongoose.model('tours', ContactSchema);
module.exports = ContactModel;