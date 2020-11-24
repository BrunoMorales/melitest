import apiClient from './apiClient'

const fetchProduct = async (productId) => {
    try {
        const response = await apiClient.get(`/api/items/${productId}`)
        return response.data
    } catch (error) { 
        console.error('Error while searching product in server. ', error)
    }
}

export default fetchProduct