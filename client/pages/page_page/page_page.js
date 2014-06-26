Template.page_page.helpers({
	page: function(){
		var customPage = Session.get('customPage');
		var page = Pages.findOne({name:customPage});
		return page;
	}
});