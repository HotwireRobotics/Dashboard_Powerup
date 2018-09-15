counter = 0;

function JSMethod() {
	document.getElementById('HeaderNumber').innerHTML = counter;
	counter = counter + 1;
}

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
