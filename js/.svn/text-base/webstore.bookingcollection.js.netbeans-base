/**
 * Collection object for multiple bookings
 */
Webstore.BookingCollection = Backbone.Collection.extend({
	// the type of model kept in this collection
	model: Webstore.Booking,

	// the url used by this.fetch(),
	// does a GET http://myhost/backbonedemo/bookings
	url: "bookings",

	// Overrides
	comparator: function(booking) {
		return booking.get("price");
	}
});