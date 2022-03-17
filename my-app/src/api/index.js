const axios = require('axios').default;

const getAllPhones = async () => {
  try {
    const allPHones = await axios.get('http://localhost:8080/api/phones')
    return allPHones.data;

  } catch(error) {
    console.log(error)
  }
}





export {getAllPhones};