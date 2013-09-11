
if (Meteor.isServer) {
	Meteor.startup(function () {
		Future = Npm.require('fibers/future');
		// Meteor.absoluteUrl.defaultOptions.rootUrl = "http://localhost:3000";
		//Pages.insert({name:'Startsida',title:'Startsida',content:'defContent',required:true});
		//Pages.insert({name:'testpage',title:'testsida',content:'textcontent',required:false})
		
	})
}