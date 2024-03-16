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
	var hour_input = document.getElementById('hours').value;
	var minute_input = document.getElementById('minutes').value;
	var second_input = document.getElementById('seconds').value;

	var display = document.getElementById('test');

	startTimer(display, hour_input, minute_input, second_input);
	
	//name
	var name_of_timer_input = document.getElementById('timer_name').value;
	var change_name_of_timer = document.getElementById('timer_title');
	change_name_of_timer.innerHTML = name_of_timer_input;
}

// time in hours = time in minutes / 60 = time in seconds / 3600

const SECOND_IN_MILISECOND = 1000;
function startTimer(display, num_hours, num_minutes, num_seconds) {
		setInterval(function () {

		num_seconds--;

		if(num_seconds == -1){
			if(num_minutes > 0){
				num_minutes--;
				num_seconds = 59;
				num_minutes = num_minutes < 10 ? "0" + num_minutes : num_minutes;
			} else if(num_hours > 0){
				num_hours--;
				num_minutes = 59;
				num_seconds = 59;
			}else{
				num_seconds = 0;
				clearInterval(this);
			}
		}


		num_seconds = num_seconds < 10 ? "0" + num_seconds : num_seconds;

		display.innerText = num_hours + ":" + num_minutes + ":" + num_seconds;
		
	}, SECOND_IN_MILISECOND);
}

let close = document.getElementsByClassName('btn-close');
for(var i = 0; i < close.length; i++){
		close[i].onclick = function(){
			var elementToDelete = ((this.parentElement).parentElement).parentElement;	
			elementToDelete.remove();
		}
}


