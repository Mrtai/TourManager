const Router =require('express').Router();
const ContactController = require('../controllers/login.controller');

Router.get('/', ContactController.getData);

module.exports = Router;
