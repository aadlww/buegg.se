Pages = new Meteor.Collection("pages");
FBPhotos = new Meteor.Collection("fbphotos");

if (Meteor.isServer) {
  	fs = Npm.require('fs');
}
