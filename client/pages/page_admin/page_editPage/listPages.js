Session.setDefault('urlName','');

Template.listPages.helpers({
	pages: function(){
		return Pages.find();
	},
	urlText: function(){
		var text= Session.get('urlName');
		return text;
	}
});

Template.listPages.created = function(){
	Session.set('urlName','');
};

Template.listPages.events({
	'submit #pages-form': function (e) {
		e.preventDefault();
		createPage();
	},
	'keyup #newPageName': function () {
		var val = $('#newPageName').val();
		if(val){
			if (!window.location.origin){
				window.location.origin = window.location.protocol+"//"+window.location.host;
			}
			var text = window.location.origin;
			text+='/'+encodeURIComponent(val);
			Session.set('urlName',text);
		}
	else{
		Session.set('urlName','');
	}
},
'click #newPageBtn':function(){
	createPage();
},
'click .btn-yellow':function(e){
	app.navigate('editPage/'+e.target.value, {trigger: true});
},
'click .btn-red':function(e){

	Meteor.call('removePage',e.target.value,function(err){
		if(err){
			showError('Fel - '+err)
		}
	else{
		showSuccess('Sida borttagen');
	}
});
},
});

function createPage(){
var pageName = $('#newPageName').val();
if(pageName.length<=0){
alert('Fyll i sidans namn');
}
else{
Meteor.call('createPage',pageName,function(err){
if(err){
	showError('Fel - '+err);
}
else{
app.navigate('editPage/'+pageName, {trigger: true});
}
});
$('#newPageName').val('');
}
}
