
// Template.nyheter.rendered = function ( ) {
// 	//console.log('ad_list rendered');
// 	$('#ads_content').fadeIn();
// }


// Template.page_posts.posts = function (){
// 	var _photos = FBPhotos.find({},{sort: {created_time: -1}}).fetch();
// 	result = [];
//     n = 1;
//     if(_photos.length > 0) {
//         _photos.forEach(function (_photo) {
//             var res = ['Hammarö','Bygg','Kakel'];
//             res.sort(function() {
//                 return Math.random() - 0.5;
//             });
//             if (_photo.name)
//                 res = _photo.name.split(/(!|,)/,3);
//             result.push({index:n, photo:_photo, text:res[0], muted:res[1], rest:res[2]});
//             n++;
//         });
//     }
// 	return result;//FBPhotos.find({},{sort: {created_time: -1}});
// };

Template.page_posts.helpers({
    posts: function () {
        var _photos = FBPhotos.find({}, {sort: {created_time: -1}}).fetch();
        result = [];
        n = 1;
        if (_photos.length > 0) {
            _photos.forEach(function (_photo) {
                var res = ['Hammarö', 'Bygg', 'Kakel'];
                res.sort(function () {
                    return Math.random() - 0.5;
                });
                if (_photo.name)
                    res = _photo.name.split(/(!|,)/, 3);
                result.push({index: n, photo: _photo, text: res[0], muted: res[1], rest: res[2]});
                n++;
            });
        }
        return result;//FBPhotos.find({},{sort: {created_time: -1}});
    },
    left: function() {
        return (this.index % 2) === 0;
    },
    right: function() {
        return (this.index % 2) === 1;
    }
});

//Template.page_posts.index = function() {
//     return FBPhotos.find().count() - FBPhotos.find({_id: {$lte: this._id}},{sort: {created_time: -1}}).count() + 1;
//};

// Template.nyheter.isEven = function() {
// 	index = FBPhotos.find().count() - FBPhotos.find({_id: {$lte: this._id}}).count() + 1;
// 	if ((index %2) == 0)
// 		return options.fn(this);
// 	return options.inverse(this);
// };

/*
Handlebars.registerHelper('if_even', function(conditional, options) {
	if((conditional % 2) == 0) {
		console.log("even: " + conditional);
		return options.fn(this);
	} else {
		return options.inverse(this);
	}
});

Handlebars.registerHelper('if_odd', function(conditional, options) {
	if((conditional % 2) == 0) {
		return options.inverse(this);
	} else {
		console.log("odd: " + conditional);
		return options.fn(this);
	}
});*/
