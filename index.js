import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import morganBody from 'morgan-body';
import googleShopping from './routes/googleShopping/index.js';
import mercadolivre from './routes/mercadoLivre/index.js';

const app = express();

app.use(cors({
    origin: '*'
}));

app.use(express.urlencoded({
    extended: true
}));

app.use(express.json());

morganBody(app);

app.use('/google', googleShopping);
app.use('/mercadolivre', mercadolivre);

app.get('/', (req, res) => {
    res.json({
        message: {
            Status: 'Funcionando'
        }
    })
});

mongoose.connect(`mongodb://localhost:27017/BigProducts?retryWrites=true&w=majority`)
.then(() => {
    console.log('Conectado ao banco de dados!');
    app.listen(3000);    
})
.catch((error) => {
    console.log(error);
})