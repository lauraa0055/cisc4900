fetch('../data/recipes/brownies.json')
    .then((response) => response.json())
    .then((json) => console.log(json));
