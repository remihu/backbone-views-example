DogView = Backbone.View.extend({

	initialize: function() {
		this.model.on('change', this.render, this);
		this.model.on('destroy', this.remove, this);
	},

	className: 'dog',

	template: _.template($('#dog-template').html()),

	events: {
		'click .update': 'update',
		'click .destroy': 'destroy'
	},

	update: function() {
		this.model.set({
			fullname: this.$el.find('.fullname').val(),
			age: this.$el.find('.age').val(),
			fleas: this.$el.find('.fleas').val()
		});
	},

	destroy: function() {
		this.model.destroy();
	},

	render: function() {
		$('main').prepend(this.$el.html(this.template(this.model.attributes)) );
		return this.el;
	}

});