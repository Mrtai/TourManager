const Router =require('express').Router();
const UserController = require('../controllers/user.controller');

Router.get('/', UserController.getData);
Router.post('/add-user', UserController.AddUser);

module.exports = Router;
