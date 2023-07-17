const express = require('express');
const connectDB = require('./config/db');
const cors = require ('cors');
const router = express.Router();

const app = express();

connectDB();

app.use(cors());

app.use(express.json ({ extended:true }));

const PORT = process.env.PORT || 4000;

app.use('/api/usuarios', require ('./routes/usuarios'));
app.use('/api/auth', require ('./routes/auth'));
app.use('/api/integrantes', require ('./routes/integrantes'));
app.use('/api/devocionales', require ('./routes/devocionales'));
app.use('/api/devocionales/:id', require ('./routes/devocionales'));

app.use('/api/nuevos', require ('./routes/nuevos'));

app.use('/', (req,res)=>{
    res.send('hola..')
})


app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server on port ${PORT}`)
});