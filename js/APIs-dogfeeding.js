var placeSearch, autocomplete;
var storage=window.localStorage;
var componentForm = {
  street_number: 'short_name',
  route: 'long_name',
  locality: 'long_name',
  administrative_area_level_1: 'short_name',
  country: 'long_name',
  postal_code: 'short_name'
};

function initialize() {
  // Create the autocomplete object, restricting the search
  // to geographical location types.
  autocomplete = new google.maps.places.Autocomplete(
      /** @type {HTMLInputElement} */(document.getElementById('search-bar')),
      { types: ['geocode'] });
  // When the user selects an address from the dropdown,
  // populate the address fields in the form.
  google.maps.event.addListener(autocomplete, 'place_changed', function() {
    fillInAddress();
  });
}

// [START region_fillform]
function fillInAddress() {
  // Get the place details from the autocomplete object.
  var place = autocomplete.getPlace();

  /*for (var component in componentForm) {
    document.getElementById(component).value = '';
    document.getElementById(component).disabled = false;
  }*/

  // Get each component of the address from the place details
  // and fill the corresponding field on the form.
  for (var i = 0; i < place.address_components.length; i++) {
    var addressType = place.address_components[i].types[0];
    if (addressType == "postal_code") {
      var val = place.address_components[i][componentForm[addressType]];
      // document.getElementById(addressType).value = val;
	  storage.setItem("zip", val);
    }
  }
}
// [END region_fillform]

// [START region_geolocation]
// Bias the autocomplete object to the user's geographical location,
// as supplied by the browser's 'navigator.geolocation' object.
function geolocate() {
  //if (navigator.geolocation) {
      /*navigator.geolocation.getCurrentPosition(function(position) {
      var geolocation = new google.maps.LatLng(
          position.coords.latitude, position.coords.longitude);
      var circle = new google.maps.Circle({
        center: geolocation,
        radius: position.coords.accuracy
      });
      autocomplete.setBounds(circle.getBounds());*/
	   $.getJSON('https://geoip-db.com/json/geoip.php?jsonp=?') 
         .done (function(location)
         {
			var res = location.city + "," + location.state+ "," + location.country_name;
            document.getElementById('search-bar').value= res;
         });

    
 // }
}

// Youtube API
function videopanel(id) { 
            var str;
            str = '<iframe width="220"  src="http://www.youtube.com/embed/' + id + '" frameborder="0" allowfullscreen></iframe>';
            return str;
        }
		function videochange(videoId,title,id) {

         $('#player' + id).html(videopanel(videoId));
         $('#title'+id).html(title);
         
		}


function getData(i){

   $.getJSON("https://www.googleapis.com/youtube/v3/search?part=snippet&q=how+to+feed+dog&maxResults=15&type=video&key=AIzaSyCUgTiICZtnR9ozTmNT-3nkP0kAaXhy5WA", function(data) {

                  var videoId=data.items[i].id.videoId;
                  var title=data.items[i].snippet.title;
                  videochange(videoId,title,i);

           });

}
	  $(document).ready(function(){
         getData(1);
		 getData(2);         getData(3);          getData(4);         getData(5);         getData(6);
         getData(7);
         getData(8);

	  });
