//Template.page_footer.rendered = function(){
////add twitter button
//!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?'http':'https';if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=p+'://platform.twitter.com/widgets.js';fjs.parentNode.insertBefore(js,fjs);}}(document, 'script', 'twitter-wjs');
//
////add facebook button
//(function(d, s, id) {
//  var js, fjs = d.getElementsByTagName(s)[0];
//  if (d.getElementById(id)) return;
//  js = d.createElement(s); js.id = id;
//  js.src = "//connect.facebook.net/sv_SE/all.js#xfbml=1";
//  fjs.parentNode.insertBefore(js, fjs);
//}(document, 'script', 'facebook-jssdk'));
//
//};
//
//Template.page_footer.about = function(){
//	var site = FBSiteInfo.find({site: facebookURL}).fetch();
//	if (site.length > 0)
//	{
//		console.log(site[0].about);
//		return site[0].about;
//	}
//};
//
//Template.page_footer.fbname = function(){
//	var site = FBSiteInfo.find({site: facebookURL}).fetch();
//	if (site.length > 0)
//	{
//		console.log(site[0].name);
//		return site[0].name;
//	}
//};
//
//Template.page_footer.phone = function(){
//	var site = FBSiteInfo.find({site: facebookURL}).fetch();
//	if (site.length > 0)
//	{
//		console.log(site[0].phone);
//		return site[0].phone;
//	}
//};
//
//Template.page_footer.posts = function(){
//	var site = FBSiteInfo.find({site: facebookURL}).fetch();
//	if (site.length > 0)
//	{
//		console.log(site[0].posts);
//		return site[0].posts;
//	}
//};
//
//Template.page_footer.owner_name = function(){
//	var site = FBSiteInfo.find({site: facebookURL}).fetch();
//	if (site.length > 0)
//	{
//		console.log(site[0].owner_name);
//		return site[0].owner_name;
//	}
//};
//
//Template.page_footer.owner_pic = function(){
//	var site = FBSiteInfo.find({site: facebookURL}).fetch();
//	if (site.length > 0)
//	{
//		console.log(site[0].owner_pic);
//		return site[0].owner_pic;
//	}
//	return loadingIcon;
//};
//
//Template.page_footer.logo = function(){
//  var site = FBSiteInfo.find({site: facebookURL}).fetch();
//  if (site.length > 0)
//  {
//    console.log(site[0].logo);
//    return site[0].logo;
//  }
//};
//
//Template.page_footer.facebookURL = function(){
//    return facebookURL
//};