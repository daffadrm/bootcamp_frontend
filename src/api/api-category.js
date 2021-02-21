import axios from 'axios'
import apiURL from './apiURL'


const listCategory = async () => {
    try {
        let responce = await axios.get (`${apiURL}/api/category/`)
        return await responce.data
    }catch (err) {
        return await err.message
    }
}

const create = async (category) => {
  console.log(category)
    try {
        let response = await axios.post(`${apiURL}/api/category/`,{
          data : category
        })
        return await response.data
      } catch(err) {
        return await err.message
      }
  };

const deleteCategory = async (id) => {
    try {
        let response = await axios.delete(`${apiURL}/api/category/${id}`)
        return await response.data
      } catch(err) {
        return await err.message
      }
  };

const updateCategory = async (category) => {
    try {
        let response = await axios.put(`${apiURL}/api/category/${category.cate_id}`,{
          data : category
        })
        return await response.data
      } catch(err) {
        return await err.message
      }
  };
  

export {listCategory,create,deleteCategory,updateCategory}