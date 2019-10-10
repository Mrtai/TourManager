const Router =require('express').Router();
const UserController = require('../controllers/tours.controller');

Router.get('/', UserController.getData);

module.exports = Router;