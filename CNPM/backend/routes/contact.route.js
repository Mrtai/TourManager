const Router =require('express').Router();
const ContactController = require('../controllers/contact.controller');

Router.get('/', ContactController.getData);
Router.post('/create', ContactController.postData);
Router.put('update/:id', ContactController.updateData);
Router.delete('delete/:id', ContactController.deleteData);

module.exports = Router;
