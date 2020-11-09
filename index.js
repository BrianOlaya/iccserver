const express = require('express');
const conectarBD = require('./config/db');
const cors = require ('cors');

const app = express();

conectarBD();

app.use(cors());

app.use(express.json ({ extended:true }));

const port = process.env.port || 4000;

app.use('/api/usuarios', require ('./routes/usuarios'));
app.use('/api/auth', require ('./routes/auth'));
app.use('/api/integrantes', require ('./routes/integrantes'));
app.use('/api/devocionales', require ('./routes/devocionales'));
app.use('/api/nuevos', require ('./routes/nuevos'));


app.listen(port, '0.0.0.0', () => {
    console.log(`Server on port ${port}`)
});