

//Handles routing,page-navigation and all links
Router = Backbone.Router.extend({
  routes: {
    "":                       "main",
    "nyheter":                "page_posts",
    "admin":                  "admin",
    "admin/:page":            "admin",
    "editPage/:name":         "editPage",
    "page/:page":             "page",
    "*undefined":             "show404Error"
  },

  main: function() {
    Session.set('currentPage','page_home');
    $('.selected').removeClass('selected');
    document.title = "Hammarö Bygg & Kakel";
  }
  ,
  admin: function(page) {
    document.title = "Admin - Hammarö Bygg & Kakel";
    Session.set('currentPage','page_admin');
    Session.set('currentPageAdmin','admin_handlePages');
  }
  ,
  editPage: function(name) {
    document.title = " Hantera sidor - Hammarö Bygg & Kakel";
    if(name){
      Session.set('editPage',decodeURIComponent(name));
      Session.set('currentPage','page_editPage');
    }
  else{
    this.show404Error();
    }
  }
  ,
  page: function(page) {
    document.title = "Hammarö Bygg & Kakel";
    if(page){
      Session.set('customPage',decodeURIComponent(page));
      Session.set('currentPage','page_page');
    }
    else{
      this.show404Error();
    }
  }
  ,
  page_posts: function() {
    document.title = "Nyheter - Hammarö Bygg & Kakel";
    Session.set('currentPage','page_posts');
  }
  ,
  show404Error: function() {
    document.title = "404 - Hammarö Bygg & Kakel";
    Session.set('currentPage','page_not_found');
  }
});


function parseQueryString(queryString){
var params = {};
if(queryString){
  _.each(
  _.map(decodeURI(queryString).split(/&/g),function(el,i){
    var aux = el.split('='), o = {};
    if(aux.length >= 1){
      var val = undefined;
      if(aux.length == 2)
        val = aux[1];
        o[aux[0]] = val;
      }
      return o;
    }),
    function(o){
      _.extend(params,o);
    }
    );
  }
  return params;
}