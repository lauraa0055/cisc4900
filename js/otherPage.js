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
		- type="button" class="btn-close" aria-label="Close"
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
	
	//name
	var name_of_timer_input = document.getElementById('timer_name').value;
	let list = document.getElementById('timer-group');

	let make_list_item = document.createElement("li");
	make_list_item.setAttribute("class", "list-group-item");

	let make_row = document.createElement("div");
	make_row.setAttribute("class", "row g-2");

	let header_div = document.createElement("div");
	header_div.setAttribute("class", "col");

	let header_text = document.createElement("h3");
	header_text.innerText = name_of_timer_input; 

	header_div.appendChild(header_text);

	let exit_button_div = document.createElement("div");
	exit_button_div.setAttribute("class", "col-auto");

	let exit_button = document.createElement("button");
	exit_button.setAttribute("class", "btn-close");
	exit_button.setAttribute("aria-label", "Close");


	let timer_paragraph = document.createElement('p');

	exit_button_div.appendChild(exit_button);

	make_row.appendChild(header_div);
	make_row.appendChild(exit_button_div);
	make_row.appendChild(timer_paragraph);

	make_list_item.appendChild(make_row);

	list.appendChild(make_list_item);
	
	startTimer(timer_paragraph, hour_input, minute_input, second_input);

	exit_button.onclick = function(){
		(((this.parentElement).parentElement).parentElement).remove();
	}
	
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


