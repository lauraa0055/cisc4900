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
