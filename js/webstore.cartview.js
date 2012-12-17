/*
 * ViewController which translates a collection of booking objects into an HTML unordered list
 */

Webstore.CartView = Backbone.View.extend({
	tagName: "ul",

	// Overrides
	initialize: function() {
		console.log("CartView.renderItem()");
		_.bind(this, "modelChanged");
		
		// add the right 'this' to be used when the callback is used
		this.collection.bind("add", this.modelChanged, this);
	},

	modelChanged: function() {
		this.render();
	},

	// Overrides
	render: function() {
		var template = $("#cart-item-template");
		var el = $(this.el);
		el.find("li").remove();
		this.collection.each(function(model){
			el.append(template.tmpl(model.toJSON()));
		});
	}
});

