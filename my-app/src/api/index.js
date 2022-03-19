const axios = require('axios').default;

const getAllPhones = async () => {
  try {
    const allPhones = await axios.get('http://localhost:8080/api/phones')
    return allPhones.data;

  } catch(error) {
    console.log(error)
  }
}

const createNewPhone = async (newPhoneData) => {
  try {
    const createPhone = await axios.post('http://localhost:8080/api/createPhone', newPhoneData);
    return createPhone;

    
  } catch (error) {
    console.log(error)
  }
}

const editPhone = async (editedPhoneInfo) => {
  try {
    const editPhone = await axios.put('http://localhost:8080/api/editPhone/',  editedPhoneInfo)

  } catch (error) {
    console.log(error)
  }
}

const deletePhone = async(phoneId, phoneList) => {
  try {
      let dataObject = {
        phoneId: phoneId,
        phoneList: phoneList
      }
        const deletePhone = await axios.delete('http://localhost:8080/api/deletePhone', {data: dataObject})
        return deletePhone;

  } catch (error) {
    console.log(error)
  }
}

export {getAllPhones, createNewPhone, deletePhone};