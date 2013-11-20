$(document).mouseup(function (e)
{
  var container = $("#nav");
  var container2 = $("#menu-icon");
  var container3 = $("#menu-icon-img");

  if (!container.is(e.target)&& !container2.is(e.target)&& !container3.is(e.target))
    {
      $("#nav").slideUp();
      // $(this).toggleClass("active");
    }
});

Template.page_header.events ={
  'click #menu-icon': function () {
    $("#nav").slideToggle();
    $(this).toggleClass("active");
  },
  'click .navBtn': function (e) {
    if($(e.currentTarget).attr('id')){}
    $("#nav").slideUp();
    $('.selected').removeClass('selected');
    $(e.currentTarget).addClass('selected');
  } 
};


Template.navlinks.helpers({
  listPages: function(){
    return Pages.find();
  },
});

Template.page_header.logo = function(){
  var site = FBSiteInfo.find({site: facebookURL}).fetch();
  if (site.length > 0)
  {
    console.log(site[0].logo);
    return site[0].logo;
  }
};

Template.page_header.fbname = function(){
  var site = FBSiteInfo.find({site: facebookURL}).fetch();
  if (site.length > 0)
  {
    console.log(site[0].name);
    return site[0].name;
  }
};
