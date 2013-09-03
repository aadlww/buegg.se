
Template.spinner.helpers({
    isLoading: function() {
    	return Session.get('loading');
    }
});