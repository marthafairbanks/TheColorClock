var colorDisplay = document.querySelector('.colorDisplay');

var updateColor = function(){

	var currentTime = new Date ( );
	var currentHours = currentTime.getHours ( );
	var currentMinutes = currentTime.getMinutes ( );
	var currentSeconds = currentTime.getSeconds ( );

	currentHours = ( currentHours > 12 ) ? currentHours - 12 : currentHours;
	currentHours = ( currentHours == 0 ) ? 12 : currentHours;
	currentHours = ( currentHours < 10 ? "0" : "" ) + currentHours;

	currentMinutes = ( currentMinutes < 10 ? "0" : "" ) + currentMinutes;
	currentSeconds = ( currentSeconds < 10 ? "0" : "" ) + currentSeconds;

	var currentColorString = "#" + currentHours + currentMinutes + currentSeconds;
	colorDisplay.innerHTML = currentColorString;

	var hexColor = colorDisplay.innerHTML;
	document.body.style.backgroundColor = hexColor;
}

window.setInterval(updateColor, 1000);
