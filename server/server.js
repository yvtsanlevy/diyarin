const express = require('express');
const path =require('path');
const http=require('http')
const bodyParser= require('body-parser');
const {MongoClient,ObjectID} = require('mongodb');
const {mongoose}=require('./db/mongoose');
const {beeds} = require('./db/models/beeds.db.js')
const {neck} = require('./db/models/neckles.db.js')
const publicPath=path.join(__dirname, '../public');


var app = express();
var server=http.createServer(app);
// const publicPath=path.join(__dirname, '../public');
const port=process.env.PORT||3000;

app.get('/beed', (req, res)=> { 
 beeds.find().lean().exec( function (err, beddArray) {
  // if (err) console.log(err)
  // 	else app.send.json(beddArray)
  // console.log(beddArray);
  return res.send(JSON.stringify(beddArray))
 
})
})
app.get('/neck', (req, res)=> { 
 neck.find().lean().exec( function (err, neckArray) {
  // if (err) console.log(err)
  // 	else app.send.json(beddArray)
  // console.log(beddArray);
  return res.send(JSON.stringify(neckArray))
 
})
})

app.get('/images', (req, res)=> { 
  var images =[{src:'14.jpg'},{src:'223.jpg'},{src:'111.jpg'}];
   // if (err) console.log(err)
   // 	else app.send.json(beddArray)
   // console.log(beddArray);
   return res.send(JSON.stringify(images))
  
 })

// app.get('/beed', (req, res)=> { res.send(JSON.stringify(beedArray)) })

// console.log(beedArray.exec(function (err, docs) {}));
neck.find({}, function (err, neckArray) {
  if (err) console.log(err)
// console.log (neckArray);
})


// app.use(express.static(publicPath));
app.use(bodyParser.json());
app.use(express.static(publicPath));
app.use(express.static(publicPath+'/image/beeds'));
app.use(express.static(publicPath+'/image/neck'));
app.use(express.static(publicPath+'/css'));
app.use(express.static(publicPath+'/image/img'));

// beeds.create({w:25,h:25,src:'10x10.jpg'}, function (err, small) {
//   if (err) return console.log(err);
  
// })

server.listen(port, () => {
	console.log(`starting on port ${port}`);
});