const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    username: String,
    password: String,
    user_id: String,
    name: String, 
    gender : String,
    email: String,
    Phone : String
});

const User = mongoose.model('users', UserSchema);
module.exports = User;