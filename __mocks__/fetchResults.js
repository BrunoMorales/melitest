import { dummySearchResults } from './dummies'

const fetchResults = () => {
    return Promise.resolve(dummySearchResults)
}

export default fetchResults