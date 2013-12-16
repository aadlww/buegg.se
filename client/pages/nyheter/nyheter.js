
// Template.nyheter.rendered = function ( ) {
// 	//console.log('ad_list rendered');
// 	$('#ads_content').fadeIn();
// }


Template.nyheter.posts = function (){
	photos = FBPhotos.find({},{sort: {created_time: -1}});
	// console.log(photos);

	// result = [];
 //    n = 1;
 //    photos.forEach(function(_photo) {
 //    	result.push({index:n, photo:_photo});
 //    	n++;
	// });

	// console.log(result);

	return FBPhotos.find({},{sort: {created_time: -1}});
};

Template.nyheter.index = function() {
     return FBPhotos.find().count() - FBPhotos.find({_id: {$lte: this._id}},{sort: {created_time: -1}}).count() + 1;
};

// Template.nyheter.isEven = function() {
// 	index = FBPhotos.find().count() - FBPhotos.find({_id: {$lte: this._id}}).count() + 1;
// 	if ((index %2) == 0)
// 		return options.fn(this);
// 	return options.inverse(this);
// };

Handlebars.registerHelper('if_even', function(conditional, options) {
	if((conditional % 2) == 0) {
		// console.log("even: " + conditional);
		return options.fn(this);
	} else {
		return options.inverse(this);
	}
});

Handlebars.registerHelper('if_odd', function(conditional, options) {
	if((conditional % 2) == 0) {
		return options.inverse(this);
	} else {
		// console.log("odd: " + conditional);
		return options.fn(this);
	}
});