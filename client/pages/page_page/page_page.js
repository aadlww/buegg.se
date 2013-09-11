Template.page_page.helpers({
	page: function(){
		var customPage = Session.get('customPage');
		var page =Pages.findOne({name:customPage});
		if(page){
			document.title = page.title+ " - Hammarö Bygg & Kakel";
		}
		return page;
	}
});

