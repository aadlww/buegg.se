Npm.depends({fbgraph:"0.2.7"});

Package.on_use(function (api) {
	if (api.export) // ensure backwards compatibility with Meteor pre-0.6.5
    	api.export('FBGRAPH');
    api.add_files('fbgraph.js', 'server');
});


