
function getElement(classname){
	return document.getElementsByClassName(classname);
}

parent = getElement('card border-dark mb-3');

const json_files = ['../rest/recipes/brownies.json', '../rest/recipes/chicken_tacos.json', '../rest/recipes/pancakes.json',
 '../rest/recipes/baked_spaghetti.json', '../rest/recipes/beef_stir_fry.json', '../rest/recipes/swiss_potato_soup.json'];

var parent_index = 0;
var child_index = 0;
for(let i = 0;  i < json_files.length; i++){
fetch(json_files[i])
    .then((response) => response.json())
    .then((json) => {
		console.log(json);

		var child = parent[parent_index];

		var title = child.children[0];
		title = title.children[0];

		title.innerHTML = json.title;

		var author = child.children[1];
		author = author.children[0];
		author.innerHTML = json.author;

		var website = parent[parent_index].children[1].children[1];
		if(json.website === ""){
		}else{
			website.setAttribute("href", json.website);
		}

		var ingredients = [child.children[1].children[3], child.children[1].children[4], child.children[1].children[5]];

		var ingredients_put = 0;
		for(let j = 0; j < ingredients.length; j++){
			ingredients[j].innerHTML = json.ingredients[j];
			ingredients_put++;
		}

		if(ingredients_put < json.ingredients.length){
			while(ingredients_put < json.ingredients.length){	
				let add_ingredient = child.children[1];

				var make_ingredient_pill = document.createElement('span'); 
				make_ingredient_pill.setAttribute("class", "badge rounded-pill text-bg-dark");
				make_ingredient_pill.innerHTML = json.ingredients[ingredients_put];
				
				add_ingredient.appendChild(make_ingredient_pill);

				ingredients_put++;
			}
		}

		++parent_index;
	});
}


