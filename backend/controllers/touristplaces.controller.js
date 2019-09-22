const UserModel = require('../models/touristplaces.model');

module.exports.getData = async (req, res) => {
    let data = await UserModel.find();
    res.json(data);
};