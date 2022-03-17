const Joi = require('joi');
const express = require('express');
var cors = require('cors')
const db = require('./assets/firebase/index');
const phoneRoutes = require("./Routes/Phones");
const data = require('./assets/data.json')
const app = express();

app.use(express.json());

app.use(cors())

console.log(db)

app.get('/', (req,res) => {
  /*   let info = db.collection('phoneCatalog'); */
    res.send('API funcionando') 
})

phoneRoutes.phoneRoutes(app, db);

function validateCourse (course){
    const schema = {
        name: Joi.string().min(3).required(),
    };
    return Joi.validate(course, schema);
}

const port = process.env.PORT || 8080;

app.listen(port, ()=>{console.log(`Listening on port ${port}`)})