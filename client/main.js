import { Template } from 'meteor/templating';
// import { ReactiveVar } from 'meteor/reactive-var';

import './main.html';


//which template to load. Used in router
Session.setDefault('currentPage','page_home');

//Error message
Session.setDefault('alertMessage',null);

//Subscribe to database pages
Meteor.subscribe('pages');

// Subscribe to facebook photos
Meteor.subscribe('fbphotos');

// Subscribe to facebook site info
Meteor.subscribe('fbsiteinfo');

// Subscribe to facebook carousel
Meteor.subscribe('fbcarousel');

//Session variable for the spinner
Session.setDefault('loading',false);

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


var site = FBSiteInfo.find({site: facebookURL}).fetch();
console.log(site);

//Backbone Router for page navigation and links
app = new Router;
Meteor.startup(function () {
  Backbone.history.start({pushState: true});
});