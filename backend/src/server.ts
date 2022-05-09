import express from 'express';

const SERVER_PORT = 6651;

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
  res.json({
    id: 1,
    nome: 'Pesquisa 123'
  });
});

app.listen(process.env.PORT || SERVER_PORT, () => {
  console.log(`SERVER START AT PORT ${process.env.PORT || SERVER_PORT}`);
});
