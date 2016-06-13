var timeDisplay = document.querySelector('.timeDisplay');

var updateTime = function(){

	var currentTime = new Date (00:30);
	var currentHours = currentTime.getHours ( );
	var currentMinutes = currentTime.getMinutes ( );
	var currentSeconds = currentTime.getSeconds ( );

	currentHours = ( currentHours > 12 ) ? currentHours - 12 : currentHours;
	currentHours = ( currentHours == 0 ) ? 12 : currentHours;
	currentHours = ( currentHours < 10 ? "0" : "" ) + currentHours;

	currentMinutes = ( currentMinutes < 10 ? "0" : "" ) + currentMinutes;
	currentSeconds = ( currentSeconds < 10 ? "0" : "" ) + currentSeconds;

	var currentTimeString = currentHours + ":" + currentMinutes + ":" + currentSeconds;
	timeDisplay.innerHTML = currentTimeString;

}

window.setInterval(updateTime, 1000);

