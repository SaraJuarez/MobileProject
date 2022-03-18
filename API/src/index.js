const express = require('express');
var cors = require('cors')
const db = require('./assets/firebase/index');
const phoneRoutes = require("./Routes/Phones");
const app = express();

app.use(express.json());
app.use(cors())

app.get('/', (req,res) => {
    res.send('API funcionando') 
})

phoneRoutes.phoneRoutes(app, db);

const port = process.env.PORT || 8080;

app.listen(port, ()=>{console.log(`Listening on port ${port}`)})