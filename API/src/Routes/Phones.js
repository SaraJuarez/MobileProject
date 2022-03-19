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
        let docRef = db.collection('phoneCatalog').doc();
        let id = docRef.id; 
        req.body.id = id;
        await db.collection('phoneCatalog').doc(id).set(req.body);
        res.status(204).send();
    });
    

    app.put('/api/editPhone', async (req,res)=>{
        
        /* Ver si existe */
        let phone = await db.collection('phone_catalog').doc(id).get();
        if(!phone) {
            res.status(404).send('That phone didnt exists');
        } else {
            await phone.set(data, {merge: true});
            res.send(res)
        }

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
    
    app.delete('/api/deletePhone', async (req, res)=>{
        let phoneId = req.body.phoneId;
        let phoneList = req.body.phoneList;
        const phone = phoneList.find(element => element.id === phoneId)
        if(!phone) return res.status(404).send('Phone id doesnt exists');
        await db.collection('phoneCatalog').doc(phoneId).delete();
        res.send(phone);
    })
}

