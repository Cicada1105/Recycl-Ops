var responseMsg;
var data;

function init() {
	responseMsg = [
		"Connection Established",
		"Request Received",
		"Processing...",
		"Request Finished"
	];
	makeRequest();
}

var makeRequest = function() {
	var req = new XMLHttpRequest();
	console.log("Before request");
	req.onReadyStateChange = function() {
		console.log(responseMsg[req.readyState]);
		
		if((this.readyState == 4) && (this.status == 200)){
			data = JSON.parse(req.responseText);
			console.log(data);
		}
	}
	req.open("GET","https://data.edmonton.ca/resource/kx42-g5ky.json");
	req.setRequestHeader("$$app_token","PA4iKx4KB0R9GDrbVuEv20mfqj1O3OwdNoHK");
	req.send(null);
}