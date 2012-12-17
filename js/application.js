/**
 * Application file for Backbone webstore.
 * Setup and starts of all application components.
 * @author tjerk
 */

var bookingCollection = new Webstore.BookingCollection([
	{id: 1, name: "Marriot, Atlanta, two weeks", price: 349},
	{id: 2, name: "Savoy, Paris, one week", price: 199},
	{id: 3, name: "Mayflower, Leiden, one weekend", price: 65}
]);

var bookingListView = new Webstore.BookingListView({
	collection: bookingCollection
});
bookingListView.render();

var cartCollection = new Webstore.CartCollection();

var cartListView = new Webstore.CartView({
	collection: cartCollection
});

$("#booking-list").html(bookingListView.el);
$("#cart-list").html(cartListView.el);

$("button").bind("click", function() {
	cartCollection.each(function(booking) {
		booking.save();
	});
});

// examples:
//
//bookingCollection.fetch();

//
//var booking = new Webstore.Booking({id: 8});
//booking.save();

//var booking = bookingCollection.get(1);
//booking.set({price: 88});
//booking.save();
//console.log(booking.get("price"));
//console.log(booking.validate());
