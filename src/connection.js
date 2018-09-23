let address = document.getElementById('connect-address'),
  connect = document.getElementById('connect'),
  buttonConnect = document.getElementById('connect-button');

let loginShown = true;

// Set function to be called on NetworkTables connect. Not implemented.
//NetworkTables.addWsConnectionListener(onNetworkTablesConnection, true);

// Set function to be called when robot dis/connects
NetworkTables.addRobotConnectionListener(onRobotConnection, false);

// Sets function to be called when any NetworkTables key/value changes
//NetworkTables.addGlobalListener(onValueChanged, true);

// Function for hiding the connect box


// Ran on window load
window.onload = function() {
	if (!isConnected) {
		//attemptToConnect();
	}
}

// How many times did we add the camera img
let cameraAddCount = 0;
// Camera interval holder
let cameraImgInterval;

// If the robot is connected or not
let isConnected = false;

/**
 * Function to be called when robot connects
 * @param {boolean} connected
 */
function onRobotConnection(connected) {
	var state = connected ? 'Robot connected!' : 'Robot disconnected.';
	console.log(state);
	isConnected = connected;
	document.getElementById('robot-status').innerHTML = state
	
	// Make sure the connect buttons are enabled
	address.disabled = false;
	connect.disabled = false;

	// Robot connected
	if (connected) {
		// We need to add the camera stream twice. Why? I don't know
		cameraImgInterval = setInterval(
			function(){ 
				if (isConnected && addCount < 2) {
					addCount++;
					//attemptToConnect();
					console.log("Adding video html " + addCount);
					document.getElementById("camera_div").innerHTML = '<img style="-webkit-user-select: none;" width="70%" src="http://10.29.90.2:1181/?action=stream">';
				}
			}, 500
		);
		
		// Update the header color
		document.getElementById("header-holder").innerHTML = '<h1 id="header-disconnected" class="uk-text-bold uk-text-success"> Hotwire Dashboard </h1>';
	} 

	// Robot disconnected
	if (!connected) {
		
		// Clear out camera information
		document.getElementById("camera_div").innerHTML = '';
		addCount = 0;
		clearTimeout(cameraImgInterval);
		
		// Update the header color
		document.getElementById("header-holder").innerHTML = '<h1 id="header-disconnected" class="uk-text-bold uk-text-danger"> Hotwire Dashboard </h1>';
	}
}

// On click try to connect and disable the input and the button
connect.onclick = () => {
	attemptToConnect();
};
address.onkeydown = ev => {
  if (ev.key === 'Enter') {
    connect.click();
    ev.preventDefault();
    ev.stopPropagation();
  }
};

function attemptToConnect() {
	console.log("Attempting to connect to " + address.value);
	
	ipc.send('connect', address.value);
	address.disabled = connect.disabled = true;
	//connect.textContent = 'Connecting...';
	
	document.getElementById('robot-status').innerHTML = "Attempting to connect to " + address.value;
}
