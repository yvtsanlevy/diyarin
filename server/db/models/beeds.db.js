var mongoose= require('mongoose')
  var Schema = mongoose.Schema;

var Beeds= new Schema({
	w:{
		type: Number,
		require:true
	},	
	 h:{
		type: Number,
		require:true
	},
	x:{
		type: Number,
		default:0
		
	},

	y:{
		type: Number,
		default:0
	},

		cy:{
		type: Number,
		default:0
	},
		cx:{
		type: Number,
		default:0
	},
	    src:{
	    	type:String,
	    	require:true,
	    	index: true,
    		unique: true
	    },
	    color:{
	    	type:String
	    },
	    style:{
	    	type:String,
	    	default: 'normal'
	    },
	    quantity:{
	    	type:Number,
	    	default:200
	    }
});

var beeds = mongoose.model('beeds', Beeds)


// Tank.create({ size: 'small' }, function (err, small) {
//   if (err) return handleError(err);
//   // saved!
// });

// // or, for inserting large batches of documents
// beeds.insertMany([
// 	{ w:15, h:20 ,src:'8x6.jpg' },
// 	{ w:40, h:40 ,src:'16x16.jpg' },
// 	{ w:50, h:50 ,src:'20x20.jpg' },
// 	{ w:5, h: 10 ,src:'2x4 br.jpg' },
// 	{ w:5 , h:20 ,src:'2x8.jpg' },
// 	{ w:5, h:25  ,src:'2x10.jpg' },
// 	{ w:7.5, h:5 ,src:'3x2 ore1.jpg' },
// 	{ w:10, h:12.5 ,src:'4x5 bl.jpg' },
// 	{ w:10, h:15 ,src:'6x4.jpg' },
// 	{ w:12.5, h:25 ,src:'5x10 bl1.jpg' },
// 	{ w:20, h:7.5 ,src:'8x3.jpg' },
// 	{ w:20, h:12.5 ,src:'8x5 pi.jpg' },
// 	{ w:20, h:20 ,src:'8x8 ye.jpg' },
// 	{ w:20, h:50 ,src:'8x20 c-3.jpg' },
// 	{ w:25, h:25 ,src:'10x10 pi 1.jpg' },
// 	{ w:25, h:25 ,src:'10x10 pi.jpg' },
// 	{ w:25, h:25 ,src:'10x10 pu1.jpg' },
// 	{ w:25, h:25 ,src:'10x10 re.jpg' },
// 	{ w:25, h:25 ,src:'10x10 ze.jpg' },
// 	{ w:30, h:25 ,src:'12x10 gr.jpg' },
// 	{ w:30, h:30 ,src:'12x12 pi 2.jpg' },
// 	{ w:32.5, h:60 ,src:'13x40 c-3 gr.jpg' },
// 	{ w:37.5, h:50 ,src:'15x20 pen pi.jpg' },
// 	{ w:37.5, h:62.5 ,src:'15x25 c-2.jpg' },
// 	{ w:50, h:50 ,src:'20x20 br1.jpg' },
// 	{ w:45, h:45 ,src:'18x18.jpg' },
// 	{ w:50, h:57.5 ,src:'20x25 c-2 bl1.jpg' },
// 	{ w:50, h:57.5 ,src:'20x25 c-2 bl2.jpg' },
// 	{ w:40, h:40 ,src:'16x16.jpg' },
// 	{ w:50, h:50 ,src:'20x20.jpg' }

// 	], function(err) {
//  if (err) return console.log(err);
// });

// newbeed.save().then((doc)=>{
// 	console.log('Saved todo',doc);
// },(err) =>{
// 	console.log('unable to save todo')
// });

// beeds.create({w:12.5,h:12.5,src:'5x5 ze (2).jpg'}, function (err, small) {
//   if (err) return console.log(err);
  
// })


module.exports = {beeds};