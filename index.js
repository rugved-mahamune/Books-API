const express = require('express');
var jwt = require('jsonwebtoken');
const books = require('./routes/books');
const users = require('./routes/users');
const bodyParser = require('body-parser');
const mongoose = require('./config/database'); //database configuration
var jwt = require('jsonwebtoken');


const app = express();

app.set('secretKey', 'nodeRestApi'); //This is secret used for creation of JWT token for users who are logging in.

//Public Route
app.use('/login', authenticate);

// Authenticated route
app.use('/books', validateUser, books);

function validateUser(req, res, next) {
    jwt.verify(req.headers['x-access-token'], req.app.get('secretKey'), function(err, decoded) {
      if (err) {
        res.json({status:"error", message: err.message, data:null});
      }else{
        // add user id to request
        req.body.userId = decoded.id;
        next();
      }
    });
    
  }
  
app.listen(3000, function(){
	console.log('Node server listening on port 3000');
});