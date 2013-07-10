require('../model')
var mongoose = require('mongoose')
	, Photos = mongoose.model('Photos');
/*
 * GET home page.
 */
var createPhoto = function (req, res) {
	new Photos({
		activity_name: req.body.activityname,
		activity_brief: req.body.activitybrief,
		start_date: new Date(req.body.startdate),
		end_date: new Date(req.body.enddate),
		photo_id: req.body.photoid,
		location: req.body.location,
		workgroup: req.body.workgroup,
		participant: req.body.participant,
		description: req.body.description,
		file_link: req.body.filelink,
		created_at: new Date(),
		updated_at: new Date()
	}).save( function (err, photo, count) {
		res.json('Create Success');
	});
};

exports.index = function(req, res){
  res.render('index', { title: 'Databank' });
};

exports.create = function(req, res) {
	switch(req.params.action) { 
		case 'photo': createPhoto(req, res); break;
	}	
};

exports.action = function (req, res) {
	res.render(req.params.action, {current: '/'+req.params.action+'?setLng='+req.locale});
//*/
};