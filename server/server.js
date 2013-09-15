var facebookURL = "hammarobygg";
var facebookURLOwner = "patric.sundell";
var facebookPostsLimit = 40;

Meteor.methods({
	getPageFBLogo: function () {
		var fut = new Future();
		var onComplete = fut.resolver();
		// FBGRAPH.setAccessToken(Meteor.user().services.facebook.accessToken);
		FBGRAPH.get(facebookURL+"?fields=picture.width(130)", function(err, res) {
			//console.log(res.data);
			return onComplete(err, res);
		});
		return fut.wait();
	},

	getTimeLinePhotos: function () {
		var fut = new Future();
		var onComplete = fut.resolver();
		FBPhotos.remove({});
		FBGRAPH.get(facebookURL+"/albums?fields=name,photos.limit(" + facebookPostsLimit + ").fields(images,link,name,created_time)", function(err, res) {
			//console.log(res.data);
			return onComplete(err, res.data);
		});
		return fut.wait();
	},

	getPageFBData: function () {
		var fut = new Future();
		var onComplete = fut.resolver();
		FBGRAPH.get(facebookURL+"?fields=about,name,phone", function(err, res) {
			//console.log(res);
			return onComplete(err, res);
		});
		return fut.wait();
	},

	getPageFBPosts: function () {
		var fut = new Future();
		var onComplete = fut.resolver();
		FBGRAPH.get(facebookURL+"?posts.limit(1)", function(err, res) {
			//console.log(res);
			return onComplete(err, res);
		});
		return fut.wait();
	},
	
	getOwnerFBMetadata: function () {
		var fut = new Future();
		var onComplete = fut.resolver();
		FBGRAPH.get(facebookURLOwner+"?fields=email,name,about,picture.width(130)", function(err, res) {
			return onComplete(err, res);
		});
		return fut.wait();
	}
});