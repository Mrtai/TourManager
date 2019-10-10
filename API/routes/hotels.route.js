const Router =require('express').Router();
const UserController = require('../controllers/hotels.controller');

Router.get('/', UserController.getData);

module.exports = Router;
