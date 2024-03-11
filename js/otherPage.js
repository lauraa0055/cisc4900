function backButton(){
	history.back();	
}

function recipeIndexButton(){
	window.location.href = "./recipeIndex.html";	
}

/*
3 teaspoons = 1 tablespoon

12 teaspoons = 4 tablespoons = ¼ cup

24 teaspoons = 8 tablespoons = ½ cup

48 teaspoons = 16 tablespoons = 1 cup  * */

function convertMeasurement(){
	//getting elements
	var to_convert = document.getElementById('input-convert').value;
	var what_is_being_converted = document.querySelector('#conversion-options');
	what_is_being_converted = what_is_being_converted.options[what_is_being_converted.selectedIndex].value;
	

	try{
		if(to_convert == null || to_convert == "")
			throw "Empty field";

		var output = calculations(to_convert, what_is_being_converted);
		document.getElementById('output-convert').value = output;
		console.log("output: " + output);
	}catch(error){
		console.log(error);
	}

	console.log(what_is_being_converted);
}

function calculations(input, conversion_type){
	const CUPS_IN_TBS = 16, TABLESPOONS_IN_TEASPOONS = 3, OUNCES_IN_CUPS = 8;
	var output = input;
	if(conversion_type == "tspTotbsp"){
		output = output/TABLESPOONS_IN_TEASPOONS;
	}
	else if(conversion_type == "cupsTotbsp"){
		output = output * CUPS_IN_TBS;
	}else if (conversion_type == "tbspTotsp"){ //table spoon to tsp
		output = output * TABLESPOONS_IN_TEASPOONS;
	}else if(conversion_type == "tbspToCups"){
		output = output / CUPS_IN_TBS;
	}else{ //cups to ounces
		output = output * OUNCES_IN_CUPS;
	}
	if(typeof output == 'number')
		return output;
	throw "Invalid Input";
}

/*
	- create list item
	- create row div: class = row g-2
	- create inner col 1: header 3: Timer Title
	- create inner col 2: class = " col-auto" -> button to exit
	- p: timer
*/



//Timer functions
const MINUTE_IN_SECONDS = 60;
const ONE_MIN = MINUTE_IN_SECONDS;
const ONE_HOUR = ONE_MIN * 60;

var SECONDS_WANTED;
var HOURS_WANTED;
function addTimer(){
	var minute_input = document.getElementById('minutes').value;
	var minute_output = ONE_MIN * minute_input;
	var display = document.getElementById('test');
	startTimer(minute_output, display);
	
	//name
	var name_of_timer_input = document.getElementById('timer_name').value;
	var change_name_of_timer = document.getElementById('timer_title');
	change_name_of_timer.innerHTML = name_of_timer_input;
}

const SECOND_IN_MILISECOND = 1000;
function startTimer(duration, display) {
	var timer = duration, minutes, seconds;
	setInterval(function () {
		minutes = parseInt(timer / 60, 10);
		seconds = parseInt(timer % 60, 10);

		minutes = minutes < 10 ? "0" + minutes : minutes;
		seconds = seconds < 10 ? "0" + seconds : seconds;

		display.innerText = minutes + ":" + seconds;

		if (--timer < 0) {
			timer = duration;
		}
	}, SECOND_IN_MILISECOND);
}

let close = document.getElementsByClassName('btn-close');
for(var i = 0; i < close.length; i++){
		close[i].onclick = function(){
			var elementToDelete = ((this.parentElement).parentElement).parentElement;	
			elementToDelete.remove();
		}
}


