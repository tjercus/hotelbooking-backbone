/**
 * ViewController translates a collection of booking objects into an HTML list
 */
Webstore.BookingListView = Backbone.View.extend({
	tagName: "ul",

	// Overrides
	initialize: function() {
		_.bindAll(this, "renderItem");
		console.log("BookingListView.initialize");
	},

	// translate each booking object into an HTML list item
	renderItem: function(booking) {
		var bookingListItemView = new Webstore.BookingListItemView({
			model: booking
		});
		bookingListItemView.render();
		$(this.el).append(bookingListItemView.el);
	},

	// Overrides
	render: function() {
		this.collection.each(this.renderItem);
	}
});

