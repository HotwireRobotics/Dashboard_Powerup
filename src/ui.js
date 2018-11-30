
// Update navx
let Navx = (key, value) => {
	console.log("navx updated" + value);
	//document.getElementById('navx_yaw').innerHTML = variableName;
}
NetworkTables.addKeyListener('/SmartDashboard/test_num', Navx, true);

<<<<<<< HEAD
let autoChoice = "none";

let PancakeUpdate = (key, value) => {
	console.log("updating pancake value " + value);
	var pancakeDisplay = document.getElementById('pancake-display');
	if (value) {
		pancakeDisplay.innerHTML = '<h2 id="header-disconnected" class="uk-text-bold uk-text-success"> pancakes </h2>';
	} else {
		pancakeDisplay.innerHTML = '<h2 id="header-disconnected" class="uk-text-bold uk-text-danger"> pancakes </h2>';
	}
}
NetworkTables.addKeyListener('/SmartDashboard/Pancake', PancakeUpdate, true);

setInterval(function() {
	//var newValue = ui.autoSelect.

	var oldChoice = autoChoice
	var autoRadioList = document.getElementsByName("auto-radios");
	for (var i = 0; i < autoRadioList.length; i++) {
		if (autoRadioList[i].checked) {
			autoChoice = autoRadioList[i].id;
		}
	}
	
	if (oldChoice != autoChoice)
	{
		NetworkTables.putValue('/SmartDashboard/Cross Line; Normal Switch; Shoot Switch', autoChoice);		
	}
}, 20);

NetworkTables.putValue('/SmartDashboard/Auto Delay', 0);
function UpdateAutoDelay()
{
	var delaySeconds = document.getElementById('auto-delay').value;
	NetworkTables.putValue('/SmartDashboard/Auto Delay', delaySeconds);
}

function UpdateNetworkTablesList()
{
	var tablesList = document.getElementById("network-tables-list");
	tablesList.innerHTML = "";
	var keyList = NetworkTables.getKeys();
	for (var i = 0; i < keyList.length; i++) {
		tablesList.innerHTML += "<li>" + keyList[i] + " \n VALUE= " + NetworkTables.getValue(keyList[i], "DEFAULT") + "</li>";
	}
}

/*
=======
>>>>>>> parent of 7138aa0... Testing and working navx
let UpdateNumber = (key, value) => {
	document.getElementById('HeaderNumber').innerHTML = value;
}
let Navx = (key, variableName) => {
	document.getElementById('navx_yaw').innerHTML = variableName;
}
 let Ultrasonic = (key, variableName) => {
	document.getElementById('ultra').innerHTML = variableName;
}
 let Potentiometer = (key, variableName) => {
	document.getElementById('pot').innerHTML = variableName;
}
 let Nuematics = (key, variableName) => {
	document.getElementById('nuematics').innerHTML = variableName;
}
let Beam Break = (key, variableName) => {
	document.getElementById('beam_break').innerHTML = variableName;
}
NetworkTables.addKeyListener('/SmartDashboard/navx_yaw', Navx);
NetworkTables.addKeyListener('/SmartDashboard/Ultrasonic', UpdateNumber);
NetworkTables.addKeyListener('/SmartDashboard/ultra', Ultrasonic);
NetworkTables.addKeyListener('/SmartDashboard/pot', Potentiometer);
NetworkTables.addKeyListener('nuematics', Nuematics);
NetworkTables.addKeyListener('beam_break', Beam Break);
