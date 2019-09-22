const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const ContactRoute = require('./routes/contact.route');
const LoginRoute = require('./routes/user.route');
const TouristPlacesRoute = require('./routes/touristplaces.route')
const app = express();

app.use(express.json());
app.use(cors());

app.use(function (req, res, next) {
    res.setHeader('Content-Type', 'text/plain');
    next();
});

//mongodb://Tai:TaiNguyen@cluster0-riazh.mongodb.net:27017/admin
mongoose.connect('mongodb+srv://Tai:TaiNguyen@cluster0-riazh.mongodb.net/Tour', { useNewUrlParser: true });
mongoose.connection.once('open', () => console.log('connected'));
mongoose.connection.on('erro', () => console.log('Error'));

//=====================

app.use('/api/contacts', ContactRoute);
app.use('/api/login', LoginRoute);
app.use('/api/touristplaces', TouristPlacesRoute);

//=======================
app.get('/', (req, res) => res.send('Web API'));

app.listen(5000);