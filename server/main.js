import { Meteor } from 'meteor/meteor';

function fbUpdate()
{
    console.log('Set access token!');
    FBGraph.setAccessToken(facebookAccessToken);

    console.log('Extend access token!');
    FBGraph.extendAccessToken({
        "client_id":      app.appId
        , "client_secret":  app.secret
    }, function (err, facebookRes) {
        facebookAccessToken = facebookRes;
        // console.log('AccessToken:' + facebookRes);
    });

    console.log('Updating from facebook...');
    FBPhotos.remove({});
    FBCarousel.remove({});
    console.log('getFBPhotos');
    FBGraph.get(facebookURL+"/albums?fields=name,photos.limit(" + facebookPostsLimit + ").fields(images,link,name,created_time)", Meteor.bindEnvironment( function(err, res) {
        // console.log(res);
        res.data.forEach(function(album) {
            if (album.name == "Timeline Photos"){
                album.photos.data.forEach(function(photo){
                    var date = new Date(photo.created_time);
                    photo.created_time = date;
                    FBPhotos.insert(photo);
                });
            }
            if (album.name == "Mobile Uploads"){
                album.photos.data.forEach(function(photo){
                    var date = new Date(photo.created_time);
                    photo.created_time = date;
                    FBPhotos.insert(photo);
                });
            }
            if (album.name == "Carousel"){
                album.photos.data.forEach(function(photo){
                    var date = new Date(photo.created_time);
                    photo.created_time = date;
                    FBCarousel.insert(photo);
                });
            }
        });
    }, function(e) {
        Meteor._debug("Exception from get facebook logo:", e);
    }));

    //console.log('getPageFBLogo');
    // FBGraph.setAccessToken(Meteor.user().services.facebook.accessToken);


    console.log('getPageFBData');
    FBGraph.get(facebookURL+"?fields=about,name,phone,description,mission,founded,cover.width(800),picture.width(130)", Meteor.bindEnvironment( function(err, res) {
        console.log('Get About From FB');
        // console.log(res);
        if (res.about) {
            FBSiteInfo.update(site[0]._id, {'$set' : {about : res.about}});
        }
        if (res.name) {
            FBSiteInfo.update(site[0]._id, {'$set' : {name : res.name}});
        }
        if (res.phone) {
            FBSiteInfo.update(site[0]._id, {'$set' : {phone : res.phone}});
        }
        if (res.description) {
            FBSiteInfo.update(site[0]._id, {'$set' : {description : res.description}});
        }
        if (res.mission) {
            FBSiteInfo.update(site[0]._id, {'$set' : {mission : res.mission}});
        }
        if (res.founded) {
            FBSiteInfo.update(site[0]._id, {'$set' : {founded : res.founded}});
        }
        if (res.cover) {
            FBSiteInfo.update(site[0]._id, {'$set' : {cover : res.cover.source}});
        }
        if (res.picture) {
            FBSiteInfo.update(site[0]._id, {'$set' : {logo : res.picture.data.url}});
        }
    }, function(e) {
        Meteor._debug("Exception from get facebook data:", e);
    }));


//    FBGraph.get(facebookURL+"?fields=albums.fields(name,photos.fields(name,picture,source,images,created_time))", Meteor.bindEnvironment( function(err, res) {
//        console.log('Get Albums From FB');
//
//        res.albums.data.forEach(function(album) {
//            console.log(album);
//
//            if (album.name == "Timeline Photos"){
//               album.photos.data.forEach(function(photo){
//                    var date = new Date(photo.created_time);
//                    photo.created_time = date;
//                    FBPhotos.insert(photo);
//                });
//            }
//            if (album.name == "Mobile Uploads"){
//                album.photos.data.forEach(function(photo){
//                    var date = new Date(photo.created_time);
//                    photo.created_time = date;
//                    FBPhotos.insert(photo);
//                });
//            }
//            if (album.name == "Carousel"){
//                album.photos.data.forEach(function(photo){
//                    var date = new Date(photo.created_time);
//                    photo.created_time = date;
//                    FBCarousel.insert(photo);
//                });
//            }
//        });
//    }, function(e) {
//        Meteor._debug("Exception from get facebook posts:", e);
//    }));

    FBGraph.get(facebookURL+"?posts.limit(1)", Meteor.bindEnvironment( function(err, res) {
        console.log('Get Posts From FB');
        // console.log(res);
        if (res.posts) {
            FBSiteInfo.update(site[0]._id, {'$set' : {posts : res.posts.data[0].message}});
        }
    }, function(e) {
        Meteor._debug("Exception from get facebook posts:", e);
    }));

    FBGraph.get(facebookURLOwner+"?fields=email,name,about,picture.width(130)", Meteor.bindEnvironment( function(err, res) {
        console.log('Get Owner Info From FB');
        // console.log(res);
        if (res.name){
            FBSiteInfo.update(site[0]._id, {'$set' : {owner_name : res.name}});
        }
        if (res.picture) {
            FBSiteInfo.update(site[0]._id, {'$set' : {owner_pic : res.picture.data.url}});
        }
    }, function(e) {
        Meteor._debug("Exception from get facebook posts:", e);
    }));
};

Meteor.startup(() => {
  // code to run on server at startup
    ServiceConfiguration.configurations.remove({
        service: 'hammarobygg'
    });
    ServiceConfiguration.configurations.insert(app);

    site = FBSiteInfo.find({site: facebookURL}).fetch();
    if (site.length == 0)
    {
        FBSiteInfo.insert({	site: facebookURL,
            logo: loadingIcon,
            about: loadingMsg,
            name: loadingMsg,
            phone: loadingMsg,
            owner_name: loadingMsg,
            owner_pic: loadingIcon,
            posts: loadingMsg});
        site = FBSiteInfo.find({site: facebookURL}).fetch();
    }

    fbUpdate();

    SyncedCron.add({
        name: 'Download facebook data',
        schedule: function(parser) {
            return parser.text('every 15 minutes');
        },
        job: function() {
            var numbersCrunched = fbUpdate();
            return numbersCrunched;
        }
    });

    SyncedCron.start();
});

