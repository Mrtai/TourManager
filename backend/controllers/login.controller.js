const ContactModel = require('../models/login.model');


module.exports.getData = async (req, res) => {
    let data = await ContactModel.find();
    res.json(data);
};
