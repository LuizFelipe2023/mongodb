import express from 'express';
import router from './routes/userRoutes.js';
import db from './banco/db.js';
const port = 3000;
const app = express();
app.use(express.json());

app.use('/users',router);


db.on('error',(error)=> console.error('Erro de Conexão', error));
db.once('open',()=> console.log('Conexão realizada com sucesso com o banco de dados MongoDB'));

app.listen(port,()=>{
    console.log(`O servidor estar rodando no endereco local: http://localhost:${port}`);
})