const express = require('express');
const path =require('path');
const http=require('http')
const bodyParser= require('body-parser');
const {MongoClient,ObjectID} = require('mongodb');
// var parseurl = require('parseurl')

const {mongoose}=require('./db/mongoose');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const MongoStore = require('connect-mongo')(session);

const {beeds} = require('./db/models/beeds.db.js')
const {neck} = require('./db/models/neckles.db.js')
const {cards} = require('./db/models/cards.db.js')
const {orders} = require('./db/models/orders.db.js')

const publicPath=path.join(__dirname, '../public');

const db = mongoose.connection

var app = express();
var server=http.createServer(app);
// const publicPath=path.join(__dirname, '../public');
const port=process.env.PORT||3000;

// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(bodyParser.urlencoded({limit: '10mb', extended: true}));
app.use(bodyParser.json({limit: "50mb"}));
app.use(bodyParser.urlencoded({limit: "50mb", extended: true, parameterLimit:50000}));
app.use(express.static(publicPath));

app.use(express.static(publicPath+'/image/neck'));
app.use(express.static(publicPath+'/css'));
app.use(express.static(publicPath+'/image/img'));
app.use(express.static(publicPath+'/image/beeds'));
app.use(cookieParser());
app.use(session({
    secret: 'my-secret',
    resave: false,
    // clear_interval: 900,
    // cookie: { maxAge: 14*24 * 60 * 60 * 1000 },
    saveUninitialized: true,
    store: new MongoStore({ mongooseConnection: db })
}));

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

app.post('/addToCards', (req, res)=> { 

  // var card = JSON.parse(req.body);
  cards.create({
    userID:req.sessionID,
    beeds:req.body.beeds,
    src:req.body.src
  });
  res.send('Got a POST request')
//  console.log(req.body);
   
 })

 app.post('/addToOrders', (req, res)=> { 

  // var card = JSON.parse(req.body);
  orders.create({
    userID:req.sessionID,
    orde:req.body.orde,
    customerFname:req.body.name,
    customerAddress:req.body.adr,
    customerPhon:req.body.phon,
    customerEmail:req.body.email,
    sum:req.body.price

  });
  res.send('Got a POST request')
//  console.log(req.body);
   
 })

 app.post('/remouveCards', (req, res)=> { 
 
  var id=ObjectID(req.body._id);
  var cond = {
   _id : id
 };
  cards.findOneAndDelete(id,(err, result) => {
    if (err) return res.send(500, err)
  else{
  res.send('Got a POST request')
//  console.log(req.body._id);
}
   
 })
})

 app.get('/getCards',(req,res)=>{
   var user=req.session;
   var cond = {
    userID : req.sessionID,
    Purchased:false

  };


  cards.find(cond).lean().exec( function (err, cardsArray) {
    console.log(cardsArray)
    return res.send(JSON.stringify(cardsArray))
 })


})




server.listen(port, () => {
	console.log(`starting on port ${port}`);
});