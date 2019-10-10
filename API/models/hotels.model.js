const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    id_hotel : String,
    id_province: String,
    name_hotel: String
});

const User = mongoose.model('hotels', UserSchema);
module.exports = User;