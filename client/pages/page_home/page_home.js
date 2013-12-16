
// Template.page_home.rendered = function ( ) {
// 	//console.log('ad_list rendered');
// 	$('#home_content').fadeIn();
// };

Template.page_home.photos = function (){
	photos = FBPhotos.find({},{sort: {created_time: -1}});
	// console.log(photos);
	return FBPhotos.find({},{sort: {created_time: -1}});
};

Template.page_home.firstphoto = function (){
	photo = FBPhotos.find({},{sort: {created_time: -1}, limit: 1}).fetch();
	// console.log(photo[0]);
	return photo[0];
};
Template.page_home.secondphoto = function (){
	photo = FBPhotos.find({},{sort: {created_time: -1}, skip: 1, limit: 1}).fetch();
	// console.log(photo[0]);
	return photo[0];
};
Template.page_home.thirdphoto = function (){
	photo = FBPhotos.find({},{sort: {created_time: -1}, skip: 2, limit: 1}).fetch();
	// console.log(photo[0]);
	return photo[0];
};

Template.page_home.firstthreephotos = function (){
	return FBPhotos.find({},{sort: {created_time: -1}, limit: 3});
};

Template.page_home.secondthreephotos = function (){
	return FBPhotos.find({},{sort: {created_time: -1}, skip: 3, limit: 3});
};

Template.page_home.thirdthreephotos = function (){
	return FBPhotos.find({},{sort: {created_time: -1}, skip: 6, limit: 3});
};

// Template.page_home.logo = function(){
//   var site = FBSiteInfo.find({site: facebookURL}).fetch();
//   if (site.length > 0)
//   {
//     console.log(site[0].logo);
//     return site[0].logo;
//   }
// };

// Meteor.startup(function() {
// 	Template.metrobox.rendered =function (){
// 		var thisBox = $(this.firstNode);

// 		// //1 if doublebox
// 		// //var doublebox= Math.floor((Math.random()*2)+1);
// 		// var box = Math.floor(Math.random() * 1000) % 3;
// 		// //console.log(box);
// 		// if(box==2){
// 		// 	thisBox.width("420");
// 		// }
// 		// else if(box==1){
// 		// 	thisBox.width("276");
// 		// }
// 		// else{
// 		// 	thisBox.width("134");
// 		// }

// 	//thisBox.slideToggle();
// 	thisBox.fadeIn('slow');
// }
// });

// function mod(n, m) {
//         return ((m % n) + n) % n;
// };

Template.page_home.about = function(){
	var site = FBSiteInfo.find({site: facebookURL}).fetch();
	if (site.length > 0)
	{
		// console.log(site[0].about);
		return site[0].about;
	}
};

Template.page_home.fbname = function(){
	var site = FBSiteInfo.find({site: facebookURL}).fetch();
	if (site.length > 0)
	{
		// console.log(site[0].name);
		return site[0].name;
	}
};

Template.page_home.phone = function(){
	var site = FBSiteInfo.find({site: facebookURL}).fetch();
	if (site.length > 0)
	{
		// console.log(site[0].phone);
		return site[0].phone;
	}
};

Template.page_home.posts = function(){
	var site = FBSiteInfo.find({site: facebookURL}).fetch();
	if (site.length > 0)
	{
		// console.log(site[0].posts);
		return site[0].posts;
	}
};

Template.page_home.owner_name = function(){
	var site = FBSiteInfo.find({site: facebookURL}).fetch();
	if (site.length > 0)
	{
		// console.log(site[0].owner_name);
		return site[0].owner_name;
	}
};

Template.page_home.owner_pic = function(){
	var site = FBSiteInfo.find({site: facebookURL}).fetch();
	if (site.length > 0)
	{
		// console.log(site[0].owner_pic);
		return site[0].owner_pic;
	}
	return loadingIcon;
};

Template.page_home.logo = function(){
  var site = FBSiteInfo.find({site: facebookURL}).fetch();
  if (site.length > 0)
  {
    // console.log(site[0].logo);
    return site[0].logo;
  }
};