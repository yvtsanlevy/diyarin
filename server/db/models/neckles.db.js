var mongoose= require('mongoose')
  var Schema = mongoose.Schema;

var Neck= new Schema({

	src:{
		type: String,
		require:true

	},
	beeds:{
		type:Array
	}

   });

var neck = mongoose.model('neck', Neck)

		//  neck.insertMany([

		// 	 {src:'neck2.jpg',
		// 	 beeds:['10x10.jpg','12x10 gr.jpg','15x20 pen pi.jpg',
		// 	 '20x20 br1.jpg','12x12 pi 2.jpg','10x10.jpg','13x40 c-3 gr.jpg',
		// 	 '10x10.jpg','13x40 c-3 gr.jpg','10x10.jpg','10x10.jpg',
		// 	 '13x40 c-3 gr.jpg','10x10.jpg','12x12 pi 2.jpg','20x20 br1.jpg',
		// 	 '15x20 pen pi.jpg','12x10 gr.jpg','10x10.jpg'
		// 	 ]
		//  	},
		//  	{
		//  		src:'neck3.jpg',
		//  		beeds:['8x3.jpg','8x8 ye.jpg','10x10 pi 1.jpg','8x8 pi.jpg','2x10.jpg',
		//  		'20x20 br1.jpg','4x5 bl.jpg','16x16.jpg','10x10.jpg','15x25 c-2.jpg',
		//  		'10x10.jpg','10x10.jpg','10x10.jpg','15x25 c-2.jpg','10x10.jpg',
		//  		'16x16.jpg','4x5 bl.jpg','20x20 br1.jpg','2x10.jpg','8x8 pi.jpg',
		//  		'10x10 pi 1.jpg','8x8 ye.jpg','8x3.jpg'
		//  		]
		//  	},
		//  	{
		//  		src:'neck5.jpg',
		//  		beeds:['10x10.jpg','8x8 re.jpg','8x8 bl.jpg','20x20 br1.jpg','10x10 re.jpg',
		//  		'12x10 gr.jpg','8x8 re.jpg','10x10.jpg','8x20 c-3.jpg','10x10.jpg',
		//  		'10x10.jpg','10x10.jpg','8x20 c-3.jpg','10x10.jpg','10x10.jpg','10x10.jpg',
		//  		'8x20 c-3.jpg','10x10.jpg','8x8 re.jpg','12x10 gr.jpg','10x10 re.jpg',
		//  		'20x20 br1.jpg','8x8 bl.jpg','8x8 re.jpg','10x10.jpg'
		//  		]
		//  	},
		//  	{
		//  		src:'neck1.jpg',
		//  		beeds:['6x4.jpg','8x6.jpg','10x10.jpg','16x16.jpg','20x20.jpg','16x16.jpg',
		//  		'16x16.jpg','16x16.jpg','16x16.jpg','16x16.jpg','16x16.jpg','16x16.jpg',
		//  		'20x20.jpg','16x16.jpg','10x10.jpg','8x6.jpg','6x4.jpg'

		//  		]
		//  	}

		//  	], function(err) {
		//  if (err) return console.log(err);
		// });




// newNeck.save().then((doc)=>{
// 	console.log('Saved todo',doc);
// },(err) =>{
// 	console.log('unable to save todo')
// });

module.exports = {neck};