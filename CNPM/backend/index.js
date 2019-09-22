const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const ContactRoute = require('./routes/contact.route');
const LoginRoute = require('./routes/login.route');

const app = express();

app.use(express.json());
app.use(cors());

app.use(function (req, res, next) {
    res.setHeader('Content-Type', 'text/plain');
    next();
});


mongoose.connect('mongodb://localhost:27017/contact_db', { isNewUrlParser: true });
mongoose.connection.once('open', () => console.log('connected'));
mongoose.connection.on('erro', () => console.log('Error'));

//=====================

app.use('/api/contacts', ContactRoute);
app.use('/api/login', LoginRoute);

//=======================
app.get('/', (req, res) => res.send('Web API'));

app.listen(5000);