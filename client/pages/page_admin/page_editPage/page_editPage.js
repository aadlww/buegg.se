// Template.page_editPage.rendered = function(){

// 	var theme = getUserTheme(Meteor.user());
// 	var pageContent = Pages.findOne({name:Session.get('editPage')});
// 	if(pageContent){
//     	$('#updateContent').val(pageContent.content);
// 		$("#updateContent").sceditor({
// 		plugins: "xhtml",
// 		style: "minified/jquery.sceditor.default.min.css"
// 		});
// 	}
// }

// Template.page_editPage.events({
// 	'click #updateThemePageBtn': function(){
// 		var title = $('#updateTitle').val();
// 		var content = $('#updateContent').sceditor('instance').val();
// 		Meteor.call('editThemePage', Session.get('editPage'),{title:title,content:content},function(err){
// 			if(err){
// 				showError(err);
// 			}
// 			else{
// 				showSuccess('Sidan uppdaterades');
// 				app.navigate('admin/handlePages', {trigger: true});
// 			}
// 		});
// 	},
// 	'click #abortThemePageBtn': function(){
// 		app.navigate('admin/handlePages', {trigger: true});
// 	},
// })

// Template.page_editPage.helpers({
//   pageContent: function(){
//     return Pages.findOne({name:Session.get('editPage')});
//   },
//   pageName: function(){
//   	return Session.get('editPage');
//   },
// });