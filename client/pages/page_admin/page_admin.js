
Template.page_admin.displayPage = function (){
  var page = Session.get('currentPageAdmin');
  if(page)
     return Template[page]();
  };

  Template.page_admin.helpers({
    isUserAdmin: function() {
      // if (Roles.userIsInRole(Meteor.user(), ['admin'])) {
      //   return true;
      // }
      return true;
    },
    });