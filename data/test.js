// Include the fs module
const fs = require("fs");

// Specify the path of the CSV file
const path = "test.csv";

// Read the CSV file
fs.readFile(path, "utf8", (err, data) => {
  if (err) {
    console.error("Error while reading:", err);
    return;
  }

  // Split the data into lines
  const lines = data.split("\n");

  // Initialize the output array
  const output = [];

	// Loop through each line and split it into fields 
	lines.forEach((line) => {
    const fields = line.split(",");
    output.push(fields);
  });

	//actual size = SIZE + 1 as this is counting for arrays
	const SIZE = 6;
	//console.log("first element: " + output[0]);
	
	var singleRecipeInformation = [];
	//pushing first type to first index of array
	for(let i = 0; i < SIZE; i++){
		singleRecipeInformation.push(output[1].splice(0, 1));
	}
	// Log the output array
	for(let i = 0; i < SIZE; i++){
		console.log(singleRecipeInformation[i]);
	}
});
