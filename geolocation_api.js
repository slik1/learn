var elMessage;
elMessage = document.getElementById('message_area');
	


if (Modernizr.geolocation) {                                // Is geo supported
  navigator.geolocation.getCurrentPosition(success, fail);  // Ask for location
  elMessage.textContent = 'Checking location...';           // Say checking...
} else {                                                    // Not supported
  elMessage.textContent = 'so so sorry but your browser sucks';   // Add manual entry
  
}


function success(){
	message = '<h3>Longitude: </h3><br>';
	message += position.coords.longitude;
	message += '<h3>Latitude: </h3><br>';
	message += position.coords.latitude;
	elMessage.innerHTML = message;
}

function fail(){
	elMessage.innerHTML = 'Failed to get location';
}
