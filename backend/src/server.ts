import express from 'express';

import env from './config/env';
import logger from './config/logger';

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
    try{
        logger.info('Rota inicial /');
        res.json({ id: 1, nome: 'Pesquisa 1234' });
    }
    catch(e){
        logger.info('SERVER ERROR', e);
        res.status(500).send('SERVER ERROR');
    }
});

app.listen(env.SERVER_PORT, () => {
    console.log(`SERVER START AT PORT ${env.SERVER_PORT}`);
});
