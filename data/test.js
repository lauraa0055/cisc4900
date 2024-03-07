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
	var a = [];
	//pushing first type to first index of array
	a.push(output[0].splice(0,1));
	for(let i = 1; i < SIZE; i++){
		console.log(i);
		a.push(output[0].splice(0, 1));
	}
	// Log the output array
	for(let i = 0; i < SIZE; i++){
		console.log(a[i]);
	}
});
