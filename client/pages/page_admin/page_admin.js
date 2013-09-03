
// Template.page_admin.displayPage = function (){
//   var page = Session.get('currentPageAdmin');
//   if(page)
//      return Template[page]();
//   };

//   Template.page_admin.helpers({
//     canSeeAdminPage: function() {
//       if (Roles.userIsInRole(Meteor.user(), ['admin','moderator'])) {
//         return true;
//       }
//       return false;
//     },
//     });