
Meteor.publish("pages", function(){
	return Pages.find();
});


Meteor.publish("fbphotos", function(){
	
	return FBPhotos.find();
	
});
