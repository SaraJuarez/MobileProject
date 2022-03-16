const Joi = require('joi');
const express = require('express');
import { phoneRoutes } from './Routes/Phones';
const app = express();

app.use(express.json());

const courses = [
    {id: 1, name: 'course1'},
    {id: 2, name: 'course2'},
    {id: 3, name: 'course3'},
];

app.get('/', (req,res) => {
    res.send('Working API')
})

phoneRoutes.phoneRoutes(app);

function validateCourse (course){
    const schema = {
        name: Joi.string().min(3).required(),
    };
    return Joi.validate(course, schema);
}

const port = process.env.PORT || 8080;

app.listen(port, ()=>{console.log(`Listening on port ${port}`)})