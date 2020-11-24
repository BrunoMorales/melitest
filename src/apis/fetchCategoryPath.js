import apiClient from './apiClient'

const fetchCategoryPath = async (categoryId) => {
    try {
        const response = await apiClient.get(`api/category/${categoryId}`)
        return response.data.path_from_root
    } catch (error) {
        console.log('Error while fetching product category. ', error)
    }
}

export default fetchCategoryPath