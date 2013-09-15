Template.contactBox.rendered = function(){
//add twitter button
!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?'http':'https';if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=p+'://platform.twitter.com/widgets.js';fjs.parentNode.insertBefore(js,fjs);}}(document, 'script', 'twitter-wjs');

//add facebook button
(function(d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) return;
  js = d.createElement(s); js.id = id;
  js.src = "//connect.facebook.net/sv_SE/all.js#xfbml=1";
  fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));

}

Template.page_footer.about = function(){
	return Session.get('about');
};

Template.page_footer.fbname = function(){
	return Session.get('name');
};

Template.contactBox.phone = function(){
	return Session.get('phone');
};

Template.page_footer.posts = function(){
	return Session.get('posts');
};

Template.page_footer.owner_name = function(){
	return Session.get('owner_name');
};

Template.page_footer.owner_pic = function(){
	return Session.get('owner_pic');
};