var recipe_picked;

function pick_recipe(recipe){
	recipe_picked = recipe;
	recipe_picked = recipe_picked.target;
	recipe_picked = recipe_picked.innerText;
	console.log("recipe picked: " + recipe_picked);
	console.log(window);
	localStorage.setItem("recipePicked", recipe_picked);
	recipePage();
}

