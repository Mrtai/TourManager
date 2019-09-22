const ContactModel = require('../models/login.moudel');


module.exports.getData = async (req, res) => {
    let data = await ContactModel.find();
    res.json(data);
};
