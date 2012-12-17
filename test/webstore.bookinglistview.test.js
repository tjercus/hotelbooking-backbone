/**
 * Unit tests for backbone demo application
 */

module("Webstore.BookingListView", {
	setup: function() {
		this.booking = new Webstore.Booking();
		this.bookingCollection = new Webstore.BookingCollection();
		this.view = new Webstore.BookingListView({
			collection: this.bookingCollection
		});
	},
	teardown: function() {
		this.booking = null;
		this.bookingCollection = null;
		this.view = null;
	}
});

test("should attach two list items to the DOM from the view's collection", function() {
	this.bookingCollection.add([{name: "one", price: 22}, {name: "two", price: 33}]);
	this.view.render();
	$("#booking-list").html(this.view.el);

	equal($("#booking-list li").length, 2, "there are not two listitems in the list");
});
