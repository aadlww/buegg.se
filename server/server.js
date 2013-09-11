var facebookURL = "hammarobygg";

Meteor.methods({
	getTimeLinePhotos: function () {
		var fut = new Future();
		var onComplete = fut.resolver();
		FBPhotos.remove({});
		FBGRAPH.setAccessToken(Meteor.user().services.facebook.accessToken);
		//FBGRAPH.get("591390337554582/photos?fields=picture,link,images&type=large&limit=40", function(err, res) {
		FBGRAPH.get(facebookURL+"/albums?fields=name,photos.limit(40).fields(images)", function(err, res) {
			//console.log(res.data);
			return onComplete(err, res.data);
		});
		return fut.wait();
	},

	getFB: function () {
		var fut = new Future();
		var onComplete = fut.resolver();
		FBPhotos.remove({});
		FBGRAPH.setAccessToken(Meteor.user().services.facebook.accessToken);
		FBGRAPH.get(facebookURL+"?metadata=1", function(err, res) {
			return onComplete(err, res);
		});
		return fut.wait();
	}
});