import {url} from '../constants';
const axios = require('axios').default;

const getAllPhones = async () => {
  try {
    const allPhones = await axios.get(`${url}/api/phones`)
    return allPhones.data;

  } catch(error) {
    console.log(error)
  }
}

const createNewPhone = async (newPhoneData) => {
  try {
    const createPhone = await axios.post(`${url}/api/createPhone`, newPhoneData);
    return createPhone;
  } catch (error) {
    console.log(error)
  }
}

const editPhone = async (editedPhoneInfo) => {
  try {
    const editPhone = await axios.put(`${url}/api/editPhone/`,  editedPhoneInfo);
    return editPhone;
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
        const deletePhone = await axios.delete(`${url}/api/deletePhone`, {data: dataObject})
        return deletePhone;

  } catch (error) {
    console.log(error)
  }
}

export {getAllPhones, createNewPhone, deletePhone, editPhone};