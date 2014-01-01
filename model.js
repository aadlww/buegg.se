Pages = new Meteor.Collection("pages");
FBPhotos = new Meteor.Collection("fbphotos");
FBSiteInfo = new Meteor.Collection("fbsiteinfo");

facebookURL = "hammarobygg"; //TODO: check if in database and if so set it
facebookURLOwner = "patric.sundell"; //TODO: check if in database and if so set it
facebookPostsLimit = 32; //TODO: check if in database and if so set it
loadingMsg = 'Välkommen!'; //TODO: check if in database and if so set it
loadingIcon = '/images/loader2.gif'; //TODO: check if in database and if so set it

function fbUpdate()
{
	console.log('Updating from facebook...');
	FBPhotos.remove({});
	FBGRAPH.get(facebookURL+"/albums?fields=name,photos.limit(" + facebookPostsLimit + ").fields(images,link,name,created_time)", Meteor.bindEnvironment( function(err, res) {
		res.data.forEach(function(album) {
			if (album.name == "Timeline Photos"){
		 		album.photos.data.forEach(function(photo){
		 			photo.created_time = new Date(photo.created_time);
		 			photo.created_time = photo.created_time.toString().substring(0, 24);
		 			//console.log(photo.created_time);
		 			FBPhotos.insert(photo);
		 		});
		 	}
		 	if (album.name == "Mobile Uploads"){
		 		album.photos.data.forEach(function(photo){
		 			photo.created_time = new Date(photo.created_time);
		 			photo.created_time = photo.created_time.toString().substring(0, 24);
		 			//console.log(photo.created_time);
		 			FBPhotos.insert(photo);
		 		});
		 	}
		 });
	}, function(e) {
		Meteor._debug("Exception from get facebook logo:", e);
	}));

	//console.log('getPageFBLogo'); 
	//FBGRAPH.setAccessToken(Meteor.user().services.facebook.accessToken);
	FBGRAPH.get(facebookURL+"?fields=picture.width(130)", Meteor.bindEnvironment( function(err, res) {
		if (res.picture) {
			//console.log(res.picture.data);
			FBSiteInfo.update(site[0]._id, {'$set' : {logo : res.picture.data.url}});
		}
	}, function(e) {
		Meteor._debug("Exception from get facebook logo:", e);
	}));

	//console.log('getPageFBData'); 
	FBGRAPH.get(facebookURL+"?fields=about,name,phone", Meteor.bindEnvironment( function(err, res) {
		//console.log(res);
		if (res.about) {
			FBSiteInfo.update(site[0]._id, {'$set' : {about : res.about}});
		}
		if (res.name) {
			FBSiteInfo.update(site[0]._id, {'$set' : {name : res.name}});
		}
		if (res.phone) {
			FBSiteInfo.update(site[0]._id, {'$set' : {phone : res.phone}});
		}
	}, function(e) {
		Meteor._debug("Exception from get facebook data:", e);
	}));

	FBGRAPH.get(facebookURL+"?posts.limit(1)", Meteor.bindEnvironment( function(err, res) {
		// console.log(res);
		if (res.posts) {
			FBSiteInfo.update(site[0]._id, {'$set' : {posts : res.posts.data[0].message}});
		}
	}, function(e) {
    		Meteor._debug("Exception from get facebook posts:", e);
	}));

	FBGRAPH.get(facebookURLOwner+"?fields=email,name,about,picture.width(130)", Meteor.bindEnvironment( function(err, res) {
		// console.log(res);
		if (res.name){
			FBSiteInfo.update(site[0]._id, {'$set' : {owner_name : res.name}});
		}
		if (res.picture) {
			FBSiteInfo.update(site[0]._id, {'$set' : {owner_pic : res.picture.data.url}});
		}
	}, function(e) {
    		Meteor._debug("Exception from get facebook posts:", e);
	}));
};

if (Meteor.isServer) {
  	fs = Npm.require('fs');

	var site = FBSiteInfo.find({site: facebookURL}).fetch();
	if (site.length == 0)
	{
		FBSiteInfo.insert({	site: facebookURL,
							logo: loadingIcon,
							about: loadingMsg, 
							name: loadingMsg, 
							phone: loadingMsg,
							owner_name: loadingMsg,
							owner_pic: loadingIcon,
							posts: loadingMsg});
		site = FBSiteInfo.find({site: facebookURL}).fetch();
	}

	fbUpdate();

	var every_midnight = new Meteor.Cron({
		events:{
		    "* 0 * * *" : fbUpdate
		}
	});
}
