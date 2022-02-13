import axios from 'axios'
import { baseURL } from './base'


const loginAPI = 'auth/login'

const login = async credentials => {
    const response = await axios.post(`${baseURL}/${loginAPI}`, credentials)
    return response.data
  }

export { login }