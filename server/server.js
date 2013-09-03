Meteor.methods({
	'postToFacebok':function(text) {
		var graph = Npm.require('fbgraph');
	// 	if(Meteor.user().services.facebook.accessToken) {
	// 		graph.setAccessToken(Meteor.user().services.facebook.accessToken);
	// 		var future = new Future();
	// 		var onComplete = future.resolver();
	// 		//Async Meteor (help from : https://gist.github.com/possibilities/3443021
	// 		graph.post('/me/feed',{message:text},function(err,result) {
	// 			return onComplete(err, result);
	// 		}
	// 		Future.wait(future);
	// 	}
	// else
	// 	{
	// 		return false;
	// 	}
	}
});