//Holds helpers that can be used all over the page


if (Meteor.isClient) {

  //Returns which template to load. Used in router
  Handlebars.registerHelper('currentPage',function(input){
    return Session.get("currentPage");
  });

  // Uses same syntax as #if helper but initially returns false for falsey or empty string values.
// Used when filling the category-dropdown

  Handlebars.registerHelper('unless_blank', function(item, block) {
    return (item && item.replace(/\s/g,"").length) ? block.fn(this) : block.inverse(this);
  });

  Handlebars.registerHelper('tasksLoaded',function(input){
    return Session.get('tasksLoaded');
  });

}// if isClient


Handlebars.registerHelper('ifOr', function(v1, v2, options) {
  if(v1 || v2) {
    return options.fn(this);
  }
  return options.inverse(this);
});


Handlebars.registerHelper('arrayify',function(obj){
  result = [];
  for (var key in obj){
    if(key!='_id')
      result.push({name:key,value:obj[key]});
    }
    return result;
  });

  Handlebars.registerHelper('isUserAdmin',function(obj){
    if(Meteor.user()){
      if (Meteor.user().profile.name == 'Anders Åslund') {
         return true;
      }
    }
    return false;
  });