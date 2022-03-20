var admin = require("firebase-admin")
var serviceAccount = require("./phonecatalogue-b7a3e-firebase-adminsdk-ipq8p-f2b42ea914.json");


admin.initializeApp({

    credential: admin.credential.cert(serviceAccount),
  
    databaseURL: "https://phonecatalogue-b7a3e.firebaseio.com"
  
});

module.exports = admin.firestore();
