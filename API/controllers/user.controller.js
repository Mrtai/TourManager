const UserModel = require('../models/user.model');

module.exports.getData = async (req, res) => {
    let data = await UserModel.find();
    res.json(data);
};

module.exports.AddUser = (req, res) => {
    let user = new UserModel(req.body);

    user.save()
    .then(()=> res.status(200).send(user))
    .catch((err)=>res.json(err))
}
