const Router =require('express').Router();
const LoginController = require('../controllers/login.controller');

Router.get('/', LoginController.getData);

module.exports = Router;
