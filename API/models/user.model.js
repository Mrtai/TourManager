const mongoose = require('mongoose');
const autoIncrement  = require('mongoose-easy-auto-increment');
const UserSchema = new mongoose.Schema({
    user_id : String,
    username: String,
    password: String,
    name: String, 
    gender : String,
    email: String,
    phone : String,
    status : String,
});
//UserSchema.plugin(autoIncrement, { field: 'user_id', collection: 'users' });
UserSchema.plugin(autoIncrement, { model: 'users', field: 'user_id' });
const User = mongoose.model('users',UserSchema);
module.exports = User;