import { dummySearchResults } from './dummies'

const fetchResults = () => {
    console.log('heyyy')
    return Promise.resolve(dummySearchResults)
}

export default fetchResults