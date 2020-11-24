import axios from 'axios'

const apiClient = axios.create({
    baseURL: 'http://localhost:4002'
})

export default apiClient