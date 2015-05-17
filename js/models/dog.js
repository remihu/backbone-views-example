Dog = Backbone.Model.extend({
	
	initialize: function() {
		this.view = new DogView({ model: this }).render();
	},

	defaults: {
		fullname: 'unknown',
		age: 0,
		fleas: false
	}

});