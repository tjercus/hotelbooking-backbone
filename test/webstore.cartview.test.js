/**
 * Unit tests for backbone demo application
 */

module("Webstore.CartView", {
	setup: function() {
		this.booking = new Webstore.Booking();
		this.cartCollection = new Webstore.CartCollection();
		this.view = new Webstore.CartView({
			collection: this.cartCollection
		});
	},
	teardown: function() {
		this.booking = null;
		this.cartCollection = null;
		this.view = null;
	}
});

test("should attach an item to the cartview list when a hotel is added to the cartcollection", function() {
	$("#cart-list").html(this.view.el);

	equal($("#cart-list li").length, 0, "there should be zero listitems in the list");
	
	this.cartCollection.add({name: "one", price: 22});
		
	equal($("#cart-list li").length, 1, "there should be one listitem in the list");
});
