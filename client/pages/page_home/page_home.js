
Template.page_home.rendered = function ( ) {
	//console.log('ad_list rendered');
	$('#home_content').fadeIn();
}

Template.page_home.photos = function (){
	return FBPhotos.find({},{sort: {created_time: -1}});
};

Meteor.startup(function() {

	Meteor.call('getPageFBLogo', function(err,result){
		//console.log(result);
		if (result.picture) {
			Session.set('logo', result.picture.data.url);
		}
	});

	Meteor.call('getTimeLinePhotos', function(err,result){
		result.forEach(function(album) {
			if (album.name == "Timeline Photos"){
				album.photos.data.forEach(function(photo){
					//console.log(photo)
					FBPhotos.insert(photo);
				});
			}
			if (album.name == "Mobile Uploads"){
				album.photos.data.forEach(function(photo){
					//console.log(photo)
					FBPhotos.insert(photo);
				});
			}
		});
	});

	Meteor.call('getPageFBData', function(err,result){
		//console.log(result);
		if (result.about) {
			Session.set('about', result.about);
		}
		if (result.name) {
			Session.set('name', result.name);
		}
		if (result.phone) {
			Session.set('phone', result.phone);
		}
	});

	Meteor.call('getPageFBPosts', function(err,result){
		//console.log(result);
		if (result.posts) {
			Session.set('posts', result.posts.data[0].message);
		}
	});
	
	Meteor.call('getOwnerFBMetadata', function(err,result){
		//console.log(result);
		if (result.name){
			Session.set('owner_name', result.name);
		}
		if (result.picture) {
			Session.set('owner_pic', result.picture.data.url);
		}
	});

	Template.metrobox.helpers({

		firstImage: function() {
			var imgUrl = getThumbUrl(this.images[0]);
			return imgUrl;
		},
		randomColor: function() {
			var colorIndex= Math.floor((Math.random()*7)+0);
			var myColors=new Array(
			"#F3B200",
			"#77B900",
			"#2572EB",
			"#B01E00",
			"#C1004F",
			"#7200AC",
			"#4617B4",
			"#006AC1",
			"#008287",
			"#199900",
			"#00C13F",
			"#FF981D",
			"#FF2E12",
			"#FF1D77",
			"#AA40FF",
			"#1FAEFF",
			"#56C5FF",
			"#00D8CC",
			"#91D100",
			"#E1B700",
			"#FF76BC",
			"#00A3A3",
			"#FE7C22"
			);
			return myColors[colorIndex];
		},
	});


	Template.metrobox.rendered =function (){
		var thisBox = $(this.firstNode);

		//1 if doublebox
		//var doublebox= Math.floor((Math.random()*2)+1);
		var box = Math.floor(Math.random() * 1000) % 3;
		//console.log(box);
		if(box==2){
			thisBox.width("420");
		}
		else if(box==1){
			thisBox.width("276");
		}
		else{
			thisBox.width("134");
		}

	//thisBox.slideToggle();
	thisBox.fadeIn('slow');
}
});

function mod(n, m) {
        return ((m % n) + n) % n;
}