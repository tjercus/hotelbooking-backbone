/*
 * Collection object for multiple booking objects
 */

Webstore.CartCollection = Backbone.Collection.extend({
	model: Webstore.Booking,
	url: "cart",

	// Overrides
	initialize: function() {
		// scope correction by putting the right 'this' in the scope of selectHandler
		_.bindAll(this, "selectedHandler");
		$(document).bind("booking.selected", this.selectedHandler);
	},

	// example of a closure
	selectedHandler: function(evt, booking) {
		this.add(new Webstore.Booking(
			{name: booking.get("name"), price: booking.get("price")})
		);
	}
});

