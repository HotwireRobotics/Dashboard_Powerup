
// Update navx
let Navx = (key, value) => {
	console.log("navx updated" + value);
	//document.getElementById('navx_yaw').innerHTML = variableName;
}
NetworkTables.addKeyListener('/SmartDashboard/test_num', Navx, true);

let autoChoice = "none";

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
		console.log("Updating auto choice to " + autoChoice);
		console.log(NetworkTables.getValue('/SmartDashboard/autoChoice'));
		
		NetworkTables.putValue('/SmartDashboard/autoChoice', autoChoice);
	}
	
}, 10);

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
let UpdateNumber = (key, value) => {
	document.getElementById('HeaderNumber').innerHTML = value;
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
let BeamBreak = (key, variableName) => {
	document.getElementById('beam_break').innerHTML = variableName;
}


NetworkTables.addKeyListener('/SmartDashboard/Ultrasonic', UpdateNumber);
NetworkTables.addKeyListener('/SmartDashboard/ultra', Ultrasonic);
NetworkTables.addKeyListener('/SmartDashboard/pot', Potentiometer);
NetworkTables.addKeyListener('nuematics', Nuematics);
NetworkTables.addKeyListener('beam_break', BeamBreak);
*/