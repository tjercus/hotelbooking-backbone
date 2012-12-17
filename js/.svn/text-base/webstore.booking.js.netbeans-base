// attach root namespace to the browser's window object
window.Webstore = {}

Webstore.Booking = Backbone.Model.extend({
	urlRoot: "bookings",

	defaults: {
		"name": "unknown",
		"price": 0
	},

	// Overrides
	initialize: function() {
		console.log("Booking object created [" + this.attributes.name + "]");

		// bind to validation errors thrown by set and save
		this.bind("error", function(model, error) {
			console.log(model.get("name") + " " + error);
		});
	},

	// Overrides
	validate: function(attrs) {
		_attrs = attrs || this.attributes;
		if (_attrs.price <= 0) {
			return "can't accept a booking without a price";
		}
	}
});