
Template.page_disclaimer.rendered = function(){
	//add twitter button
	// !function(d,s,id){
	// 	var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?'http':'https';
	// 	if(!d.getElementById(id)){
	// 		js=d.createElement(s);js.id=id;js.src=p+'://platform.twitter.com/widgets.js';
	// 		fjs.parentNode.insertBefore(js,fjs);
	// 	}
	// }(document, 'script', 'twitter-wjs');

	//add facebook button
	(function(d, s, id) {
		var js, fjs = d.getElementsByTagName(s)[0];
		if (d.getElementById(id)) return;
		js = d.createElement(s); js.id = id;
		js.src = "//connect.facebook.net/sv_SE/all.js#xfbml=1";
		fjs.parentNode.insertBefore(js, fjs);
	}(document, 'script', 'facebook-jssdk'));

};

Template.page_disclaimer.facebookURL = function(){
    return facebookURL
};