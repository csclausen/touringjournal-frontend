import axios from 'axios'
import { baseURL } from './base'


const loginAPI = 'auth/login'
const registerAPI = 'auth/register'

const login = async credentials => {
    const response = await axios.post(`${baseURL}/${loginAPI}`, credentials)
    return response.data
  }

const register = async userData => {
    const response = await axios.post(`${baseURL}/${registerAPI}`, userData)
    return response.data
}

export { login, register }