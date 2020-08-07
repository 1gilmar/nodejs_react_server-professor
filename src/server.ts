import express from 'express';

const app = express();
// adicionado para permitir post
app.use(express.json())

app.get("/", (request, response) =>{
  return response.json({mensagem: "hello world"});
});



app.listen(3333);