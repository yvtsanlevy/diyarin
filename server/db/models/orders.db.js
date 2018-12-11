var mongoose= require('mongoose')
  var Schema = mongoose.Schema;

var Orders= new Schema({
    userID:{
        type: String,
        require:true
    },
	orde:{
		type:Array
		

    },
   
	
    customerFname:{
        type:String,
        require:true
    },
    customerAddress:{
        type:Array,
        require:true
    },
    customerPhon:{
        type:String,
        require:true
    },
    customerEmail:{
        type:String,
        require:true
    },
    sum:{
        type:Number,
        require:true
    },
    Purchased:{
        type:Boolean,
     default:false
    },
    prepared:{
        type:Boolean,
        default:false
    },
    Sent:{
        type:Boolean,
        default:false
    },
    completed:{
        type:Boolean,
        default:false
    },

   });

var orders= mongoose.model('orders', Orders);

module.exports = {orders};