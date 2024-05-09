
function getElement(id) {
  return document.getElementById(id);
}

fetch('../rest/recipes/brownies.json')
    .then((response) => response.json())
    .then((json) => {
		console.log(json);

		getElement('title').innerHTML = json.brownieRecipe.title;
		getElement('author').innerHTML = json.brownieRecipe.author;
		getElement('ing1').innerHTML = json.brownieRecipe.ingredients[0];
		getElement('ing2').innerHTML = json.brownieRecipe.ingredients[1];
		getElement('ing3').innerHTML = json.brownieRecipe.ingredients[2];
	});
