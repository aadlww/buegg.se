

//Handles routing,page-navigation and all links
Router = Backbone.Router.extend({
    routes: {
        "":                       "main",
        "news":                   "page_posts",
        "about":                  "about",
        "admin":                  "admin",
        "admin/:page":            "admin",
        "editPage/:name":         "editPage",
        "page/:page":             "page",
        "*undefined":             "show404Error"
    },

    main: function() {
        Session.set('currentPage','page_home');
        $('.selected').removeClass('selected');
    }
    ,
    about: function() {
        Session.set('currentPage','page_about');
        $('.selected').removeClass('selected');
    }
    ,
    admin: function(page) {
        Session.set('currentPage','page_admin');
        Session.set('currentPageAdmin','admin_handlePages');
    }
    ,
    editPage: function(name) {
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
        Session.set('currentPage','page_posts');
    }
    ,
    show404Error: function() {
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