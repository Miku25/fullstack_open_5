import axios from 'axios'
const baseUrl = '/api/blogs'

let token = null

const setToken = newToken => {
  token = `bearer ${newToken}`
}

const create = async newObject => {
  const config = {
    headers: { Authorization: token },
  }

  const response = await axios.post(baseUrl, newObject, config)
  return response.data
}

const removeOne = async(id) => {
  const url = `${baseUrl}/${id}`
  const response = await axios.delete(url)
  return response.data
}

const getOne = async(id) => {
  const url = `${baseUrl}/${id}`
  const response = await axios.get(url)
  return response.data
}

const updateLike = async (id) => {
  const object = await getOne(id)
  const updatedObject = { ...object, likes: object.likes+1 }
  const url = `${baseUrl}/${id}`
  const response = await axios.put(url, updatedObject)
  console.log(updatedObject)
  return response.data
}

const getAll = () => {
  const request = axios.get(baseUrl)
  return request.then(response => response.data)
}

export default { getAll, create, setToken, updateLike, getOne, removeOne }