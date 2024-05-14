/*
 *Javascript file for index.html 

 will handle the button calls 
 * */

function search(){

    window.location.href = "./listPage.html";

}

function logoButton(){
	window.location.href = "./aboutPage.html";
}

function tutorialButton(){

	window.location.href = "./tutorialPage.html";

}

function recipeListButton(){

	window.location.href = "./recipeIndex.html";

}

function otherPageButton(){
	window.location.href = "./other.html";
}


//search function


function search(){
	const user_input = document.getElementById("input").value;
	const search_value = user_input.toLowerCase().split(",");
	
	if(search_value.length == 1){
		localStorage.setItem("recipe_name", search_value);
		localStorage.setItem("ingredients", 'null');
	}else{
		localStorage.setItem("ingredients", search_value);
		localStorage.setItem("recipe_name", 'null');
	}
	
	window.location.href = "./listPage.html";
}



