
Template.page_home.rendered = function ( ) {
	//console.log('ad_list rendered');
	$('#home_content').fadeIn();
};

Template.page_home.photos = function (){
	return FBPhotos.find({},{sort: {created_time: -1}});
};

Template.page_home.logo = function(){
  var site = FBSiteInfo.find({site: facebookURL}).fetch();
  if (site.length > 0)
  {
    console.log(site[0].logo);
    return site[0].logo;
  }
};

Meteor.startup(function() {
	Template.metrobox.rendered =function (){
		var thisBox = $(this.firstNode);

		// //1 if doublebox
		// //var doublebox= Math.floor((Math.random()*2)+1);
		// var box = Math.floor(Math.random() * 1000) % 3;
		// //console.log(box);
		// if(box==2){
		// 	thisBox.width("420");
		// }
		// else if(box==1){
		// 	thisBox.width("276");
		// }
		// else{
		// 	thisBox.width("134");
		// }

	//thisBox.slideToggle();
	thisBox.fadeIn('slow');
}
});

function mod(n, m) {
        return ((m % n) + n) % n;
};