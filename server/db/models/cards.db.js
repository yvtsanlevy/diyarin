var mongoose= require('mongoose')
  var Schema = mongoose.Schema;

var Cards= new Schema({
    userID:{
        type: String,
        require:true
    },
	src:{
		type: String
		

    },
    
	beeds:{
		type:Array
    },
    Purchased:{
        type:Boolean,
     default:false
    },
    price:{
      type:Number,
      default:85
    }

   });

var cards= mongoose.model('cards', Cards);

module.exports = {cards};