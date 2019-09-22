const ContactModel = require('../models/contact.model');


module.exports.getData = async (req, res) => {
    let data = await ContactModel.find();
    res.json(data);
};

module.exports.postData = (req, res) => {
    let contact = new ContactModel(req.body);

    contact.save()
    .then(()=> res.json('created'))
    .catch((err)=>res.json(err))
}

module.exports.updateData = (req, res)=>{
    let id = req.params.id;
    ContactModel.updateOne({_id: id}, req.body)
    .then(()=> res.json('updated'))
    .catch((err)=> res.status(400).json(err));
}

module.exports.deleteData = (req, res) =>{
    let id= req.params.id;
    
}