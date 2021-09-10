/* eslint-disable import/no-anonymous-default-export */
/* eslint-disable no-unused-vars */
import axios from 'axios'
const loginUrl = '/api/login'
const messageUrl = '/api/messages'
const userUrl = '/api/user'

const getAll = async() => {
    const result =  await axios.get(messageUrl)
    return result.data
}

const addUser = async(newObject) => {
    const result = await axios.post(userUrl,newObject)
    return result.data
} 
const addMessages = async (newObject,username) => {
    const result = await axios.post(`${messageUrl}/${username}`,newObject)
    return result.data
}
const login = async newObj => {
    const result = await axios.post(loginUrl,newObj)
    return result.data
}
const getUserData = async username => {
    const result = await axios.get(`${messageUrl}/user/${username}`)
    return result.data
}


export default {getAll,addUser,addMessages,login,getUserData}