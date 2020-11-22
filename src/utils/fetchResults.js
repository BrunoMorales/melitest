import apiClient from './apiClient.js'

const fetchResults = async (searchInput) => {
    try {
        const response = await apiClient.get(`/api/items?q=${searchInput}`)
        return (response.data)
    } catch (error) {
        console.error('Error while searching items in server', error)
    }
}

export default fetchResults