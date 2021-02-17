const express = require('express');
const app = express();

require("dotenv/config");
  
//configurando o express 
app.use(express.json());

//usando rotas rotas
app.use('/api', require('../src/routes/routes'));

app.listen(process.env.PORT, (err) =>
  err
    ? console.log(err)
    : console.log(`Backend is running in: http://${process.env.HOST}:${process.env.PORT}/api`)
);