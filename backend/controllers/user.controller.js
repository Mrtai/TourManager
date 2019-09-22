const UserModel = require('../models/user.model');

module.exports.getData = async (req, res) => {
    let data = await UserModel.find();
    res.json(data);
};

module.exports.createUser = (req, res) => {
    let user = new UserModel(req.body);

    user.save()
    .then(()=> res.json('created user seccuss'))
    .catch((err)=>res.json(err))
}
