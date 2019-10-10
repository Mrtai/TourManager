const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const ContactRoute = require('./routes/contact.route');
const TouristPlacesRoute = require('./routes/touristplaces.route');
const TourRoute = require('./routes/tours.route');
const HotelsRoute = require('./routes/hotels.route');
const UserRoute = require('./routes/user.route');


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

app.use('/api/touristplaces', TouristPlacesRoute);
app.use('/api/tours', TourRoute);
app.use('/api/hotels', HotelsRoute);
app.use('/api/user',UserRoute);



//=======================
app.get('/', (req, res) => res.send('Web API'));

app.listen(5000);