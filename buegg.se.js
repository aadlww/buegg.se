//this file is loaded last

if (Meteor.isClient) {

  //which template to load. Used in router
  Session.setDefault('currentPage','page_home');

  //Error message
  Session.setDefault('alertMessage',null);

  //Subscribe to database pages
  Meteor.subscribe('pages');

  // Subscribe to facebook photos
  Meteor.subscribe('fbphotos');

  //Session variable for the spinner
  Session.setDefault('loading',false);

  //Sessions for homepage
  Session.setDefault('logo', '/images/loader2.gif');
  Session.setDefault('about', 'Laddar...');
  Session.setDefault('name', 'Laddar...');
  Session.setDefault('phone', 'Laddar...');
  Session.setDefault('posts', 'Laddar...');
 
  //Sessiosn for owner
  Session.setDefault('owner_name', 'Laddar...');
  Session.setDefault('owner_pic', '/images/loader2.gif');


  Meteor.autorun(function () {
    // var theme = getUserTheme(Meteor.user());
    // adjustTheme(theme);

  //if the user  is on the page when the server is unreachable
    if(!Meteor.status().connected){
      // $('#page_wrapper').css('border-left','10px solid #C80000');
      // $('#page_wrapper').css('border-right','10px solid #C80000');

    }
    Session.set('tasksLoaded', false);

  });


  // setAdFilter = function(){

  // }

  //Backbone Router for page navigation and links
  app = new Router;
  Meteor.startup(function () {
    Backbone.history.start({pushState: true});
  });

}//if isClient

