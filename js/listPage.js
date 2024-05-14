function homeButton(){

	window.location.href = "./index.html";
}

function recipePage(){
	window.location.href = "./recipePage.html";
}

window.onload = getInput();
var recipe_index;
function getInput(){
	recipe_index = ['../rest/recipes/brownies.json', '../rest/recipes/chicken_tacos.json', '../rest/recipes/pancakes.json'];

	const recipe_name = localStorage.getItem("recipe_name");

	if(recipe_name === 'null'){
		const recipe_ingredients = localStorage.getItem("ingredients").split(",");
		loadRecipesWithIngredients(recipe_ingredients);
		console.log("ingredients: " + recipe_ingredients);
	}else{
		loadRecipesWithName(recipe_name);
		console.log("name: " + recipe_name);
	}
}


parent = document.getElementsByClassName('card border-dark mb-3');

var parent_index = 0;
function loadRecipesWithIngredients(recipe_ingredients){
	let found_recipe = false;

	for(let i = 0; i < recipe_index.length; i++){
		fetch(recipe_index[i])
		.then((response) => response.json())
		.then((json) => {
			console.log(json);
			console.log(recipe_ingredients);
			let count  = 0;
			for(let j = 0; j < recipe_ingredients.length; j++){
				for(let k = 0; k < json.ingredients.length; k++){
					if(recipe_ingredients[j].toLowerCase() === json.ingredients[k].toLowerCase() ||
					recipe_ingredients[j].includes(json.ingredients[k].toLowerCase()) ||
					json.ingredients[k].toLowerCase().includes(recipe_ingredients[j])){
						found_recipe = true;
						count++;
					}
				}
			}
			if(count > 0){
				console.log(count);
				if(parent_index == 0){
				var title = parent[parent_index].children[0];
					title = title.children[0];

					var author = parent[parent_index].children[1];
					author = author.children[0];

					var ingredients = [parent[parent_index].children[1].children[3], 
						parent[parent_index].children[1].children[4], 
						parent[parent_index].children[1].children[5]];

					title.innerHTML = json.title;
					author.innerHTML = json.author;
					
					var ingredients_put = 0;
					for(let j = 0; j < ingredients.length; j++){
						ingredients[j].innerHTML = json.ingredients[j];
						ingredients_put++;
					}

					if(ingredients_put < json.ingredients.length){
						while(ingredients_put < json.ingredients.length){	
							let add_ingredient = parent[0].children[1];

							var make_ingredient_pill = document.createElement('span'); 
							make_ingredient_pill.setAttribute("class", "badge rounded-pill text-bg-dark");
							make_ingredient_pill.innerHTML = json.ingredients[ingredients_put];
							
							add_ingredient.appendChild(make_ingredient_pill);

							ingredients_put++;
						}	
					
						parent_index++;
					}				
				}else{
					console.log("more than one");

					var card = document.createElement("div");
					card.setAttribute("class", "card border-dark mb-3");
					card.setAttribute("style", "max-width: 36rem;");
					card.setAttribute("onclick", "pick_recipe(event);");

					var card_header = document.createElement("div");
					card_header.setAttribute("class", "card-header");

					var title = document.createElement("h1");
					title.innerHTML = json.title;

					//body
					var card_body = document.createElement("div");
					card_body.setAttribute("class", "card-body text-dark");

					var author = document.createElement("h5");
					author.setAttribute("class", "card-title");
					author.innerHTML = json.author;

					var ref = document.createElement("a");
					ref.setAttribute("href", "");
					ref.innerHTML = "Original Website";

					var br = document.createElement("br");

					card_header.appendChild(title);

					card_body.appendChild(author);
					card_body.appendChild(ref);
					card_body.appendChild(br);


					for(let z = 0; z < json.ingredients.length; z++){
						var make_ingredient_pill = document.createElement('span'); 
						make_ingredient_pill.setAttribute("class", "badge rounded-pill text-bg-dark");
						make_ingredient_pill.innerHTML = json.ingredients[z];
							
						card_body.appendChild(make_ingredient_pill);
					}

					card.appendChild(card_header);
					card.appendChild(card_body);

					var list = document.getElementsByClassName('row-cols-3 row-cols-md-2 g-4');
					list[0].appendChild(card);

				}
			}
		});

	}

	if(!found_recipe){
		var list = document.getElementsByClassName('row');
		list[0].remove();

		var sorry = document.createElement("h1");
		sorry.setAttribute("style", "text-align: center;");
		sorry.innerHTML = "Apologies as there does not seem to be a result of your search in our database";

		document.body.appendChild(sorry);

	}

}

function loadRecipesWithName(recipe_name){
	let found_recipe = false;

	for(let i = 0; i < recipe_index.length; i++){
		fetch(recipe_index[i])
		.then((response) => response.json())
		.then((json) => {
			console.log(json.title.toLowerCase());

			if(recipe_name === json.title.toLowerCase() || json.title.toLowerCase().includes(recipe_name) ||
			recipe_name.includes(json.title.toLowerCase())){
				found_recipe = true;
				if(parent_index == 0){
					var title = parent[parent_index].children[0];
					title = title.children[0];

					var author = parent[parent_index].children[1];
					author = author.children[0];

					var ingredients = [parent[parent_index].children[1].children[3], 
						parent[parent_index].children[1].children[4], 
						parent[parent_index].children[1].children[5]];

					title.innerHTML = json.title;
					author.innerHTML = json.author;
					
					var ingredients_put = 0;
					for(let j = 0; j < ingredients.length; j++){
						ingredients[j].innerHTML = json.ingredients[j];
						ingredients_put++;
					}

					if(ingredients_put < json.ingredients.length){
						while(ingredients_put < json.ingredients.length){	
							let add_ingredient = parent[0].children[1];

							var make_ingredient_pill = document.createElement('span'); 
							make_ingredient_pill.setAttribute("class", "badge rounded-pill text-bg-dark");
							make_ingredient_pill.innerHTML = json.ingredients[ingredients_put];
							
							add_ingredient.appendChild(make_ingredient_pill);

							ingredients_put++;
						}
					}
				}else{
					console.log("more than one");

					var card = document.createElement("div");
					card.setAttribute("class", "card border-dark mb-3");
					card.setAttribute("style", "max-width: 36rem;");
					card.setAttribute("onclick", "pick_recipe(event);");

					var card_header = document.createElement("div");
					card_header.setAttribute("class", "card-header");

					var title = document.createElement("h1");
					title.innerHTML = json.title;

					//body
					var card_body = document.createElement("div");
					card_body.setAttribute("class", "card-body text-dark");

					var author = document.createElement("h5");
					author.setAttribute("class", "card-title");
					author.innerHTML = json.author;

					var ref = document.createElement("a");
					ref.setAttribute("href", "");
					ref.innerHTML = "Original Website";

					var br = document.createElement("br");

					card_header.appendChild(title);

					card_body.appendChild(author);
					card_body.appendChild(ref);
					card_body.appendChild(br);

					for(let z = 0; z < json.ingredients.length; z++){
						var make_ingredient_pill = document.createElement('span'); 
						make_ingredient_pill.setAttribute("class", "badge rounded-pill text-bg-dark");
						make_ingredient_pill.innerHTML = json.ingredients[z];
							
						card_body.appendChild(make_ingredient_pill);
					}

					card.appendChild(card_header);
					card.appendChild(card_body);

					var list = document.getElementsByClassName('row-cols-3 row-cols-md-2 g-4');
					list[0].appendChild(card);

				}
			}
		});
		parent_index++;
	}

	if(!found_recipe){
		const potential_recipe_ingredient = [recipe_name];
		loadRecipesWithIngredients(potential_recipe_ingredient);
	}
}
