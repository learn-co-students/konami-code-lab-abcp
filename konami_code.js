const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]

let index = 0;

function init() {
	// attach a keydown event listener to the document body
	document.body.addEventListener('keydown', testFunction);
}

function testFunction(e) {
	// convert value of keypress into integer & save it in key variable
	const key = parseInt(e.detail || e.which);
 
	// check whether the key matches the current spot in the code array
	if (key === code[index]) {
		// if so, increment the index
		index++;
 
		// if the index is at the end of the array, send alert
		if (index === code.length) {
			alert("Congratulations!");
 
			index = 0;
		}
	// if the key doesn't match the current spot in the array, reset the index to 0 to start over
	} else {
		index = 0;
  }
}