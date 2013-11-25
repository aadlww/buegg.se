
// Template.nyheter.rendered = function ( ) {
// 	//console.log('ad_list rendered');
// 	$('#ads_content').fadeIn();
// }

Template.nyheter.posts = function (){
	return FBPhotos.find({},{sort: {created_time: -1}});
};

