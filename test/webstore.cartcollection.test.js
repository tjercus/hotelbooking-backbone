/**
 * Unit tests for backbone demo application
 */

module("Webstore.CartCollection", {
	setup: function() {
		this.booking = new Webstore.Booking();
		this.cartCollection = new Webstore.CartCollection();		
	},
	teardown: function() {
		this.booking = null;
		this.cartCollection = null;		
	}
});

test("should add an item to cartcollection when booking.selected event is raised", function() {
	equal(this.cartCollection.length, 0, "collection should be empty on start");
	
	$(document).trigger("booking.selected", this.booking);

	equal(this.cartCollection.length, 1, "collection should have 1 element");
});
