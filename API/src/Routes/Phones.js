/* const validateInfo = require('../utils/validateInfo');
 */
exports.phoneRoutes = (app,db) => {
    app.get('/api/phones', async (req,res) => {      
        let phoneData = await db.collection('phoneCatalog').get();
        let phoneList = [];
        if(!phoneData) {
            res.status(404).send("Ha habido algún error al pedir los teléfonos")
        } else {
           for (const phone of phoneData.docs) {
                let info = phone.data();
                phoneList.push(info)
           }
        }
        res.send(phoneList) 
    });
    
    
    app.post('/api/createPhone', async (req,res) =>{

        db.collection('phoneCatalog').doc().id;
        db.collection('phoneCatalog').doc(id).set({
            id: id,
            color: "amarillo",
            description: "feo",
            imageFileName: "",
            manufacturer: "yo",
            name: "La prueba buena",
            price: "Muchísmo",
            processor: "jeje",
            ram: "3",
            screen: "grande",
            
        })

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

