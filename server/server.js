const express = require('express');
const path =require('path');
const http=require('http')
const bodyParser= require('body-parser');
const {MongoClient,ObjectID} = require('mongodb');
const {mongoose}=require('./db/mongoose');
const {beeds} = require('./db/models/beeds.db.js')
const {Neck} = require('./db/models/neckles.db.js')

var server=http.createServer(app);
var app = express();
// const publicPath=path.join(__dirname, '../public');
const port=process.env.PORT||3000;


// app.use(express.static(publicPath));
app.use(bodyParser.json());

// beeds.create({w:25,h:25,src:'10x10.jpg'}, function (err, small) {
//   if (err) return console.log(err);
  
// })

server.listen(port, () => {
	console.log(`starting on port ${port}`);
});