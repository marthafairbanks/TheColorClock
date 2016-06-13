var colorDisplay = document.querySelector('.colorDisplay');
var currentTime = new Date ( );

var updateColor = function(){
	currentTime.setSeconds(currentTime.getSeconds() + 1);
	var currentHours = currentTime.getHours ( );
	var currentMinutes = currentTime.getMinutes ( );
	var currentSeconds = currentTime.getSeconds ( );

	currentHours = hexToColor(currentHours);
	currentMinutes = hexToColor(currentMinutes);
	currentSeconds = hexToColor(currentSeconds);

	var currentColorString = "#" + currentHours + currentMinutes + currentSeconds;
	colorDisplay.innerHTML = currentColorString;

	var hexColor = (colorDisplay.innerHTML).toString(16);
	console.log(hexColor);
	document.body.style.backgroundColor = hexColor;
}

var hexToColor = function(number) {
	number = parseInt(number);
	number = number.toString(16);
	number = number.length == 1 ? '0' + number : number;
	return number;
};

window.setInterval(updateColor, 1000);
