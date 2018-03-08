// Asynchronous Javascript and XML 
// update a web page without reloading the page
// request data from a server -after the page has loaded
// reveive data from a server -after the page has loaded
// send data to a server -in the background

var xhr; // define the global variable to process the AJAX request
function callDivChange() {
	// XMLHttpRequest is to request data from a web server 
	// transport data as plain text or JSON text
	// How AJAX works
	// 1. An event occurs in a web page 
	// 2. An XMLHttpRequest object is created by Javascript
	// 3. The XMLHttpRequest object sends a request to a web server
	// 4. The server processes the request
	// 5. The server sends a request back to the web page
	// 6. The response is read by Javascript
	// 7. Proper action is performed by Javascript
	xhr = new XMLHttpRequest();
	// getElementById: find elements by element id 
	var filename = document.getElementById("filename").value;
	// open(method,url,async,user,psw)
	// method: the request type GET or POST
	// url: the file location
	// async: true(asynchronous), false(synchronous)
	// user: optional user name
	// psw: optional password
	xhr.open("GET", filename, true);
	// onreadystatechange: define a function to be called when the readySate property changes
	xhr.onreadystatechange = processDivChange;
	try {
		// setRequestHeader: returns header information 
	 xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
	}
	catch (e) {
	// this only works in internet explorer
	}
	// send: send the request to the server 
	xhr.send();
}
function processDivChange() {
	if (xhr.readyState < 4) // while waiting response from server
		document.getElementById('div1').innerHTML = "Loading...";
		
	else if (xhr.readyState === 4) { // 4 = Response from server has been completely loaded.
		if (xhr.status == 200 && xhr.status < 300)
		// http status between 200 to 299 are all successful
		// responseText: returns the response data as a string
		document.getElementById('div1').innerHTML = xhr.responseText;
	 }
}

