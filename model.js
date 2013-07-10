var mongoose = require('mongoose')
  , Schema = mongoose.Schema;



var Photos = new Schema({
	activity_name: String,
	activity_brief: String,
	start_date: Date,
	end_date: Date,
	photo_id: String,
	location: String,
	workgroup: String,
	participant: String,
	description: String,
	file_link: String,
	created_at : Date,
	updated_at : Date
});

var Photos = mongoose.model('Photos', Photos);

