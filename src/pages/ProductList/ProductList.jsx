import React, {  useEffect, useState } from "react";
import './ProductList.scss'
import SearchResult from "../../components/SearchResult";
import fetchResults from "../../utils/fetchResults"

const ELEMENTS_PER_PAGE = 4

const ProductList = (props) => {
    const params = props.location?.search.slice(8)
    const [results, setResults] = useState()

    useEffect(() => {
        params ?
            fetchResults(params)
                .then((res) => {
                    setResults(res)
                })
            :
            setResults(undefined)
    }, [params])

    return (
        <section className='product-list'>
            <div className='result-container'>
                {results?.items.slice(0, ELEMENTS_PER_PAGE).map((result, index) =>
                    <SearchResult data={result}  key={index} />
                )}
            </div>
        </section>
    )
}

export default ProductList