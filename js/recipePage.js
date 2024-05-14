window.onload = getRecipe(localStorage.getItem("recipePicked"));

var recipe;
function getRecipe(gotRecipe){
	recipe = gotRecipe;
}

const recipe_list_links = ['../rest/recipes/brownies.json', '../rest/recipes/chicken_tacos.json', '../rest/recipes/pancakes.json'];

function homeButton(){
	window.location.href = "./index.html";
}

function backButton(){
	history.back();
}

function getElement(id){
	return document.getElementById(id);
}

var titleElement = getElement("title-of-recipe");
titleElement = titleElement.children[0];

var authorElement = getElement("author");
authorElement = authorElement.children[0];

var ingredientsElement = getElement("ingredients");

var measurementsElement = getElement("measurements");

var instructions = getElement("instructions");

var loaded_recipe = false;
for(let i = 0;  i < recipe_list_links.length; i++){
	if(!loaded_recipe){
		fetch(recipe_list_links[i])
		.then((response) => response.json())
		.then((json) => {
			if(recipe == json.title){
				console.log(window);
				titleElement.innerText = json.title;
				authorElement.innerText = json.author;
			
				var putIngredients = 0;
				for(let x = 0; x < 4; x++){
					ingredientsElement.children[x].innerText = json.ingredients[x];
					putIngredients++;
				}

				if(putIngredients < json.ingredients.length){
					while(putIngredients < json.ingredients.length){	
						let add_ingredient = ingredientsElement;

						var make_ingredient_list = document.createElement('li'); 
						make_ingredient_list.innerHTML = json.ingredients[putIngredients];
						
						add_ingredient.appendChild(make_ingredient_list);

						putIngredients++;
					}	
				}

				var putMeasurements = 0;
				for(let x = 0; x < 4; x++){
					measurementsElement.children[x].innerText = json.measurements[x];
					putMeasurements++;
				}

				if(putMeasurements < json.measurements.length){
					while(putMeasurements < json.measurements.length){	
						let add_measurement = measurementsElement;

						var make_measurement_list = document.createElement('li'); 
						make_measurement_list.innerHTML = json.measurements[putMeasurements];
						
						add_measurement.appendChild(make_measurement_list);

						putMeasurements++;
					}	
				}

				instructions.innerText = json.instructions;
				
				loaded_recipe = true;
			}
		});
	}else{
		break;
	}
}


