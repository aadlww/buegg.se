
if (Meteor.isServer) {
	Meteor.startup(function () {
		Future = Npm.require('fibers/future');
		
		// Config.insert({
		// 	fburl:'hammarobygg',
		// 	fbsiteowner:'patric.sundell',
		// 	main_color:'#4fbe37', 
		// 	second_color:'#7b7979'});
	})
}