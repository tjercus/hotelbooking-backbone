module("Webstore.Booking", {
	setup: function() {
		this.booking = new Webstore.Booking();
	},
	teardown: function() {
		this.booking = null;
	}
});

test("should have default price as 0", function() {
	equal(this.booking.get("price"), 0, "is not zero");
});

test("should have default name as 'unknown'", function() {
	equal(this.booking.get("name"), "unknown", "has no default");
});

test("should validate with a price bigger than zero", function() {
	this.booking.set({"price": 8});
	equal(this.booking.validate(), null, "is too small");
});

test("should validate with a price smaller than zero", function() {
	this.booking.set({"price": -2});
	equal(this.booking.validate(), "can't accept a booking without a price",
		"is too small");
});

