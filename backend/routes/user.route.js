const Router =require('express').Router();
const UserController = require('../controllers/user.controller');

Router.get('/', UserController.getData);
Router.get('/add-user', UserController.createUser);

module.exports = Router;
