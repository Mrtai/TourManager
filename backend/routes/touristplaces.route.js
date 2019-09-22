const Router =require('express').Router();
const UserController = require('../controllers/touristplaces.controller');

Router.get('/', UserController.getData);

module.exports = Router;