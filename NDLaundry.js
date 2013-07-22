Parse.initialize("O69EF9OAsc8eGtyYkh7eFoTWhW92zcmzVnEFHAzL", "rwGZsHmsidrT9zGKP9I9PvIEIK7CHFK5cjgmSS9y");
var TestObject = Parse.Object.extend("TestObject");
var testObject = new TestObject();
testObject.save({foo: "bar"}, {
  success: function(object) {
    alert("yay! it worked");
  }
});

var LaundryInfo = Parse.Object.extend("LaundryInfo");
var laundryInfo = new LaundryInfo();

laundryInfo.set("name", "");
laundryInfo.set("email", "");
laundryInfo.set("phone", "");
laundryInfo.set("classYear", 0);
laundryInfo.set("time", 0);




var name = "";
var email = "";
var phone = "";
var classYear = 0;
var time = 0;


var NDLaundry = (function(){
	var exports = {};
	var setup = function(div){
		var hours = $("<span>Hours: </span><input class = 'hours'></input>");
		var minutes = $("<span>Minutes: </span><input class = 'minutes'></inputs>");
		var send = $("<button class = 'send btn btn-primary'>Send!</button>")
		$(div).append(hours, minutes, send);
	}
	exports.setup = setup;
	return exports;
})();

$(document).ready(function(){
	$(".NDLaundry").each(function(){
		NDLaundry.setup(this);
	})
	$(".send").on("click", function(){
		laundryInfo.set("time", ( parseInt($(".hours").val()) * 60 ) + ( parseInt($(".minutes").val()) ) );
		laundryInfo.save(null, {
		  success: function(laundryInfo) {
		    // Execute any logic that should take place after the object is saved.
		    alert('New object created with objectId: ' + laundryInfo.id);
		  },
		  error: function(laundryInfo, error) {
		    // Execute any logic that should take place if the save fails.
		    // error is a Parse.Error with an error code and description.
		    alert('Failed to create new object, with error code: ' + error.description);
		  }
		});
	})
});