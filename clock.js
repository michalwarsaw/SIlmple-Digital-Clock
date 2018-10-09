function displayTime() {
	let currentTime = new Date();

	let getHours = currentTime.getHours();
	let getMinutes = currentTime.getMinutes();
	let getSeconds = currentTime.getSeconds();
	
		if (getHours < 10) {
				getHours = "0" + getHours;
			}
		if (getMinutes < 10) {
			getMinutes = "0" + getMinutes;
			}
		if (getSeconds < 10) {
			getSeconds = "0" + getSeconds;
			}

	let currentTimeString = getHours + ":" + getMinutes + ":" + getSeconds;
	
	document.querySelector(".clock").innerHTML = currentTimeString;

	setTimeout(displayTime, 1000);
}

displayTime();