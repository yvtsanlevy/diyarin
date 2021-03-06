
var mongoose = require('mongoose');

mongoose.Promise=global.Promise;
mongoose.connect(process.env.MONGODB_URI||"mongodb://localhost:27017/appDb" , { useNewUrlParser: true,
useMongoClient: true 
}).then(
  (res) => {
   console.log("Connected to Database Successfully.")
  }
).catch(() => {
  console.log("Conntection to database failed.");
});

module.exports={
	mongoose:mongoose
};