
Meteor.methods({
	createPage: function(pageName){
		console.log('creating page: ' + pageName);
		if(true) //Check if user is admin
		{
			if(Pages.findOne({name:pageName})){
				throw new Meteor.Error(403, "Page already exists");
			}
			else{
				Pages.insert({name:pageName,title:pageName,content:'defContent'});
			}
		}
		else{
			throw new Meteor.Error(403, "Not allowed, only moderators and admins can manage pages");
		
		}
	},
	removePage: function(pageName){
		console.log('removing page: ' + pageName);
		if(true) //Check if user is admin
		{
			if(!Pages.findOne({name:pageName}).required){
				Pages.remove({name:pageName},function(err){
					if(err){
						console.log(err);
					}
				});
			}
			else{
				throw new Meteor.Error(403, "You can´t remove required pages");
		
			}
		}
	},
	//options shall include title and content
	editPage: function(pageName,options){
		console.log('editing page' + pageName);
		if(true) //Check if user is admin
		{
			var page = Pages.findOne({name:pageName});
			if(page){//if page already exists
				Pages.update({name:pageName},
					{
						$set:{
							title:options.title,
							content:options.content
						}
					}
				);
			}
			else{
				Pages.insert({
					name:pageName,
					title:options.title,
					content:options.content
				});
			}


		}
		else{
			throw new Meteor.Error(403, "Not allowed, only moderators and admins can change content of pages");
		}
	},
})