Template.about_cover.fbname = function(){
    var site = FBSiteInfo.find({site: facebookURL}).fetch();
    if (site.length > 0)
        return site[0].name;
};

Template.page_about.about_text = function(){
    var site = FBSiteInfo.find({site: facebookURL}).fetch();
    if (site.length > 0)
        return site[0].about;
};

Template.page_about.mission = function(){
    var site = FBSiteInfo.find({site: facebookURL}).fetch();
    if (site.length > 0)
        return site[0].mission;
};

Template.page_about.description = function(){
    var site = FBSiteInfo.find({site: facebookURL}).fetch();
    if (site.length > 0)
        return site[0].description;
};

Template.about_cover.about_cover = function (){
    var site = FBSiteInfo.find({site: facebookURL}).fetch();
    if (site.length > 0)
       return site[0].cover;
};

// Template.page_about.rendered = function ( ) {
// 	//console.log('ad_list rendered');
// 	$('#home_content').fadeIn();
// };

//Template.page_about.photos = function (){
//	photos = FBPhotos.find({},{sort: {created_time: -1}});
//	// console.log(photos);
//	return FBPhotos.find({},{sort: {created_time: -1}});
//};
//
//
//Template.page_about.secondphoto = function (){
//	photo = FBPhotos.find({},{sort: {created_time: -1}, skip: 1, limit: 1}).fetch();
//	// console.log(photo[0]);
//	return photo[0];
//};
//Template.page_about.thirdphoto = function (){
//	photo = FBPhotos.find({},{sort: {created_time: -1}, skip: 2, limit: 1}).fetch();
//	// console.log(photo[0]);
//	return photo[0];
//};
//
//Template.page_about.firstthreephotos = function (){
//	return FBPhotos.find({},{sort: {created_time: -1}, limit: 3});
//};
//
//Template.page_about.secondthreephotos = function (){
//	return FBPhotos.find({},{sort: {created_time: -1}, skip: 3, limit: 3});
//};
//
//Template.page_about.thirdthreephotos = function (){
//	return FBPhotos.find({},{sort: {created_time: -1}, skip: 6, limit: 3});
//};

// Template.page_about.logo = function(){
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

//Template.page_about.phone = function(){
//	var site = FBSiteInfo.find({site: facebookURL}).fetch();
//	if (site.length > 0)
//	{
//		// console.log(site[0].phone);
//		return site[0].phone;
//	}
//};
//
//Template.page_about.posts = function(){
//	var site = FBSiteInfo.find({site: facebookURL}).fetch();
//	if (site.length > 0)
//	{
//		// console.log(site[0].posts);
//		return site[0].posts;
//	}
//};
//
//Template.page_about.owner_name = function(){
//	var site = FBSiteInfo.find({site: facebookURL}).fetch();
//	if (site.length > 0)
//	{
//		// console.log(site[0].owner_name);
//		return site[0].owner_name;
//	}
//};
//
//Template.page_about.owner_pic = function(){
//	var site = FBSiteInfo.find({site: facebookURL}).fetch();
//	if (site.length > 0)
//	{
//		// console.log(site[0].owner_pic);
//		return site[0].owner_pic;
//	}
//	return loadingIcon;
//};
//
//Template.page_about.logo = function(){
//  var site = FBSiteInfo.find({site: facebookURL}).fetch();
//  if (site.length > 0)
//  {
//    // console.log(site[0].logo);
//    return site[0].logo;
//  }
//};