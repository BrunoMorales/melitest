const constants = require('./constants');
const { API, author } = constants
const buildBaseItem = require('./buildBaseItem')
const fetch = require('node-fetch')

const getProductById = (req, res) => {
    const { productId } = req.params
    fetch(`${API}/items/${productId}`)
        .then(res => res.json())
        .then(data => {
            buildProductPayload(data).then(
                product => res.send(product)
            )
        })
        .catch((error) => {
            console.info('Error while fetching product', error)
        })
}

const buildProductPayload = async (rawProduct) => (
    fetch(`${API}/items/${rawProduct.id}/description`)
        .then(res => res.json())
        .then(res => ({
            author,
            item: {
                ...buildBaseItem(rawProduct),
                sold_quantity: rawProduct.sold_quantity,
                category: rawProduct.category_id,
                description: res.plain_text
            }
        })
        )
        .catch((error) => {
            console.info('Error while fetching product description. Returning description as undefined.', error)
            return {
                author,
                item: {
                    ...buildBaseItem(rawProduct),
                    sold_quantity: rawProduct.sold_quantity,
                    category: rawProduct.category_id,
                    description: undefined
                }
            }
        })
)



module.exports = getProductById
