const express = require('express');
const app = express();
const PORT = 8080;

app.use(express.json())

app.listen(
	PORT,
	() => console.log(`its alive on http://localhost:${PORT}`)
)

app.post('/recipe/:id', (req, res) => {
	const {id} = req.params;
	const {name} = req.body;

	if(!name){
		res.status(418).send({message: 'We need a name!'})
	}

	res.send({
		recipe: `recipe with name of ${name} and ID of ${id}`,
	});
});

app.get('/recipe', (req, res)=>{
	res.status(200).send({
		recipe: 'brownie',
		type: 'sweets'
	})
});
