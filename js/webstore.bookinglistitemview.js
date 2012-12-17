/*
 * ViewController which translates a single booking object into an HTML list item
 */

Webstore.BookingListItemView = Backbone.View.extend({
	tagName: "li",

	// declarative eventbinding
	events: {
		"click": "clickHandler"
	},

	// Overrides
	initialize: function() {
		console.log("BookingListItemView.initialize");
		this.model.bind("change", this.render, this);
	},

	clickHandler: function(evt) {
		evt.preventDefault();

		// jQuery custom event
		$(document).trigger("booking.selected", this.model);
	},

	// Overrides
	render: function(){
		var template = $("#booking-template");

		// use jQuery-template plugin to render the model as HTML
		var html = template.tmpl(this.model.toJSON());
		$(this.el).append(html);
	}
});

