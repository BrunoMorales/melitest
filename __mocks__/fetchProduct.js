import { dummyProduct} from './dummies'

const fetchProduct = () => {
    return Promise.resolve(dummyProduct)
}

export default fetchProduct