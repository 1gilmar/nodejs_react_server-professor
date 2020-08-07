import express from 'express';

const app = express();
// adicionado para permitir post
app.use(express.json())

app.get("/users", (request, response) =>{
	const users = [
	{nome: "gilmar", idade: 40},
	{nome: "aldinaura", idade: 40},
	{nome: "alef bonitão", idade: 8},
]
  return response.json(users);
});

app.post("/users", (request, response) =>{
	const users = request.body;
	return response.json(users);
})

app.listen(3333);