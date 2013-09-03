

//Handles routing,page-navigation and all links
Router = Backbone.Router.extend({
  routes: {
    "":                       "main",
    // "admin":                  "admin",
    // "admin/:page":            "admin",
    "*undefined":             "show404Error"
  },


  main: function() {
    Session.set('currentPage','page_home');
    $('.selected').removeClass('selected');
    document.title = "Hammarö Bygg & Kakel";
  }
  ,
//   admin: function(page) {
//     document.title = "Admin - Hammarö Bygg & Kakel";
//     Session.set('currentPage','page_admin');
//     $('.selected').removeClass('selected');
//     Session.set('currentPageAdmin',null);
//     if(page==='handleUsers'){
//       Session.set('currentPageAdmin','admin_handleUsers');
//     }
//   else if(page ==='handlePages'){
//     Session.set('currentPageAdmin','admin_handlePages');
//   }
// }
// ,
// editPage: function(name) {
//   document.title = " Hantera sidor - Off2Off";
//   if(name){
//     Session.set('editPage',decodeURIComponent(name));
//     Session.set('currentPage','page_editPage');
//   }
// else{
//   this.show404Error();
// }
// }
// ,
show404Error: function() {
document.title = "404 - Off2Off";
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