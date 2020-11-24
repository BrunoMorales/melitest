import React, {  useEffect, useState } from "react";
import './ProductList.scss'
import SearchResult from "../../components/SearchResult";
import fetchResults from "../../apis/fetchResults"
import Breadcrumb from '../../components/Breadcrumb'

const ELEMENTS_PER_PAGE = 4

const ProductList = (props) => {
    const params = props.location?.search.slice(8)
    const [results, setResults] = useState()

    useEffect(() => {
        params ?
            fetchResults(params)
                .then((res) => {
                    setResults(res.items)
                })
            :
            setResults(undefined)
    }, [params])

    return (
        <section className='product-list'>
            <Breadcrumb categoryId={results?.category_id}/>
            <div className='result-container'>
                {results?.length > 1 ? 
                results.slice(0, ELEMENTS_PER_PAGE).map((result, index) =>
                    <SearchResult data={result}  key={index} />
                )
                :
                <div className='no-result-card'>
                    No se encontró ningún resultado
                </div>
            }
            </div>
        </section>
    )
}

export default ProductList