
Template.page_admin.displayPage = function (){
  var page = Session.get('currentPageAdmin');
  if(page)
     return Template[page]();
  };

  Template.page_admin.helpers({
    isUserAdmin: function() {
      if(Meteor.user()){
        if (Meteor.user().profile.name == 'Anders Åslund') {
           return true;
        }
        if (Meteor.user().profile.name == 'Patric Sundell') {
           return true;
        }
        if (Meteor.user().profile.name == 'Torbjörn Andersson') {
           return true;
        }
      }
      return false;
    },
    });