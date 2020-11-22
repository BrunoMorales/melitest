
const fetch = require('node-fetch')
const constants = require('./constants')
const { API, author } = constants
const { getCategoryWithMostResults } = require('./getCategoryBreadcrumb');
const buildBaseItem = require('./buildBaseItem')

const getResultsFromServer = (req, res) => {
    const { q } = req.query;
    fetch(`${API}/sites/MLA/search?q=${q}`)
        .then(res => res.json())
        .then(data => {
            const results = buildResultsPayload(data)
            res.send(results);
        })
        .catch((error) => {
            console.info('Error while fetching results', error)
        })
}



const buildResultsPayload = (data) => ({
    author,
    category_id: getCategoryWithMostResults(data.available_filters),
    items: data.results.map((result) => ({
        ...buildBaseItem(result),
        address: result.address.state_name
    }))
});

module.exports = { getResultsFromServer }
