Template.page_editPage.rendered = function(){
	var pageContent = Pages.findOne({name:Session.get('editPage')});
	if(pageContent){
    	$('#updateContent').val(pageContent.content);
		$("#updateContent").sceditor({
		plugins: "xhtml",
		style: "minified/jquery.sceditor.default.min.css"
		});
	}
}

Template.page_editPage.events({
	'click #updatePageBtn': function(){
		var title = $('#updateTitle').val();
		var content = $('#updateContent').sceditor('instance').val();
		Meteor.call('editPage', Session.get('editPage'),{title:title,content:content},function(err){
			if(err){
				showError(err);
			}
			else{
				showSuccess('Sidan uppdaterades');
				app.navigate('admin/handlePages', {trigger: true});
			}
		});
	},
	'click #abortPageBtn': function(){
		app.navigate('admin/handlePages', {trigger: true});
	},
})

Template.page_editPage.helpers({
  pageContent: function(){
  	console.log('looking for page content: ' + Session.get('editPage'));
    return Pages.findOne({name:Session.get('editPage')});
  },
  pageName: function(){
  	return Session.get('editPage');
  },
});