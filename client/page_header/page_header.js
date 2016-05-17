Template.page_header.helpers({
    listPages: function(){
        return Pages.find();
    },
    fbname: function(){
        var site = FBSiteInfo.find({site: facebookURL}).fetch();
        if (site.length > 0)
        {
            console.log(site[0].name);
            document.title = site[0].name;
            return site[0].name;
        }
        else
        {
            document.title = 'Could not get FB name!';
        }
    }
});

Template.page_header.events({
    'click .navbar-brand': function () {
        $('.active').removeClass('active');
        $("#navBtnHome").parent().addClass('active');
    },
    'click .navbar-toggle': function () {
        $("#navbar-collapse").slideToggle();
    },
    'click .navBtn': function (e) {
        if($(e.currentTarget).attr('id')){}
        $("#navbar-collapse").slideUp();
        $('.active').removeClass('active');
        $(e.currentTarget).parent().addClass('active');
    }
});

// Template.page_header.events ={
//    'click .navbar-brand': function () {
//        $('.active').removeClass('active');
//        $("#navBtnHome").parent().addClass('active');
//    },
//    'click .navbar-toggle': function () {
//      $("#navbar-collapse").slideToggle();
//    },
//    'click .navBtn': function (e) {
//      if($(e.currentTarget).attr('id')){}
//      $("#navbar-collapse").slideUp();
//      $('.active').removeClass('active');
//      $(e.currentTarget).parent().addClass('active');
//    }
// };

// Template.page_header.listPages = function(){
//   return Pages.find();
// };
//
// Template.page_header.fbname = function(){
//   var site = FBSiteInfo.find({site: facebookURL}).fetch();
//   if (site.length > 0)
//   {
//     console.log(site[0].name);
//     document.title = site[0].name;
//     return site[0].name;
//   }
//   else
//   {
//       document.title = 'Could not get FB name!';
//   }
// };



