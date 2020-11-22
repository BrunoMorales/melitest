const fetch = require('node-fetch')
const { API } = require('./constants')

const getCategoryWithMostResults = (available_filters) => {
    const categoryFilter = available_filters.find(
        (available_filter) => available_filter.id === 'category'
    )
    let finalCategory = { id: '', name: '', results: 0 };
    categoryFilter && categoryFilter.values.map(
        (category) => {
            if (category.results > (finalCategory.results || 0)) finalCategory = category
        })
    return finalCategory.id
}

const getBreadcrumbByCategoryId = (req, res) => {
    const { categoryId } = req.params
    fetch(`${API}/categories/${categoryId}`)
        .then(res => res.json())
        .then(data => {
            res.send(data)
        })
        .catch((error) => {
            console.info('Error while fetching categories', error)
        })
}

module.exports = { getCategoryWithMostResults, getBreadcrumbByCategoryId }