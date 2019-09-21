const mongoose = require('mongoose');

const ContactSchema = new mongoose.Schema({
    username: String,
    password: String,
});

const User = mongoose.model('users', ContactSchema);
module.exports = User;