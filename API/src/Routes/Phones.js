
exports.phoneRoutes = (app) => {
    app.get('/api/phones', (req,res)=>{
        const course = courses.find(element => element.id === parseInt(req.params.id));
        if(!course) return res.status(404).send('El id del móvil no existe');
        res.send(course);
    });
    
    
    app.post('/api/createPhone', (req,res) =>{
    
        const {error} = validateCourse(req.body);
        if(error) return res.status(400).send(error.details[0].message);
    
        const course = {
            id: courses.length +1,
            name: req.body.name
        };
        courses.push(course);
        res.send(course);
    });
    
    app.put('/api/editPhone/:id', (req,res)=>{
    
        /* Ver si existe */
        const course = courses.find(element => element.id === parseInt(req.params.id))
        /* Si no existe, retornamos 404 */
        if(!course) return res.status(404).send('El id del curso no existe');
        /* Si existe, la validamos */
        const {error} = validateCourse(req.body);
        /* Si está mal, retornamos 400 */
        if(error) return res.status(400).send(error.details[0].message);
        /* Si esta bien cambiamos la data */
        course.name = req.body.name;
        /* Devolvemos la data cambiada */
        res.send(course)
    })
    
    app.delete('/deletePhone/:id',(req, res)=>{
        /* Ver si existe */
        const course = courses.find(element => element.id === parseInt(req.params.id))
        /* Si no existe, retornamos 404 */
        if(!course) return res.status(404).send('El id del curso no existe');
        /* Borrar */
        const index = courses.indexOf(course);
        courses.splice(index,1);
        res.send(course);
    })
}
