
Meteor.publish("pages", function(){
	return Pages.find();
});

Meteor.publish("fbphotos", function(){
	return FBPhotos.find();
});

Meteor.publish("fbsiteinfo", function(){
	return FBSiteInfo.find();
});

Meteor.publish("fbcarousel", function(){
    return FBCarousel.find();
});
