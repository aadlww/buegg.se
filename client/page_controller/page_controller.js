Template.page_controller.display_page = function (){
    var page = Session.get('currentPage');
    return Template[page];
};
//
//Template.dynamicTemplate.chooseTemplate = function (name) {
//    name = Session.get('currentPage');
//    return Template[name];
//};

/*
Template.page_controller.helpers({
    page: function(){
        var page_name = Session.get('currentPage');
        console.log(page_name);
        var page = Template[page_name];
//		if(page){
//			document.title = page.title+ " - Hammarö Bygg & Kakel";
//		}
        return page;
    }
});*/
