const buildBaseItem = (rawItem) => ({
    id: rawItem.id,
    title: rawItem.title,
    price: {
        currency: rawItem.currency_id,
        amount: Math.floor(rawItem.price),
        decimals: rawItem.price % 1,
    },
    picture: rawItem.thumbnail,
    condition: getProductCondition(rawItem),
    free_shipping: rawItem.shipping.free_shipping,
})

const getProductCondition = (rawItem) => {
    const attribute = rawItem.attributes.find((attribute) => attribute.id === 'ITEM_CONDITION')
    return attribute.value_name

}
module.exports = buildBaseItem