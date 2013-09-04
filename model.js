Pages = new Meteor.Collection("pages");

if (Meteor.isServer) {
  fs = Npm.require('fs');
}
