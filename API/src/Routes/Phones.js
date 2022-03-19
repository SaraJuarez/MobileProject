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
        let docRef = await db.collection('phoneCatalog').doc();
        let id = docRef.id; 
        req.body.id = id;
        console.log(req.body)
        await db.collection('phoneCatalog').doc(id).set(req.body);
        res.send(req.body);
    });
    

    app.put('/api/editPhone', async (req,res)=>{
        let phoneId= req.body.id;
        let data = req.body;
        let phone=  await db.collection('phoneCatalog').doc(phoneId).get();
        if(!phone) {
            res.status(404).send('That phone didnt exists');
        } else {
            await db.collection('phoneCatalog').doc(phoneId).set(data, {merge: true});
            res.status(200).send(phone)
        }
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

