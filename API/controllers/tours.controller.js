const UserModel = require('../models/tours.model');

module.exports.getData = async (req, res) => {
    let data = await UserModel.find();
    res.json(data);
};