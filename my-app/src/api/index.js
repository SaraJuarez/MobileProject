const axios = require('axios').default;

const getAllPhones = async () => {
  try {
    const allPHones = await axios.get('http://localhost:8080/api/phones')
    return allPHones.data;

  } catch(error) {
    console.log(error)
  }
}

const createNewPhone = async (newPhoneData) => {

  try {
    const createPhone = await axios.post('http://localhost:8080/api/createPhone')
    console.log(createPhone)
    
  } catch (error) {
    console.log(error)
  }
}





export {getAllPhones, createNewPhone};