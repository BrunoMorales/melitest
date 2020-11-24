import React, {  useEffect, useState } from "react";
import './ProductList.scss'
import SearchResult from "../../components/SearchResult";
import fetchResults from "../../apis/fetchResults"
import Breadcrumb from '../../components/Breadcrumb'
import NotFound from "../../components/NotFound";

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

    return results?.length > 1 ? 
        <section className='product-list'>
            <Breadcrumb categoryId={results?.category_id}/>
            <div className='result-container'>
            {
                results.slice(0, ELEMENTS_PER_PAGE).map((result, index) =>
                    <SearchResult data={result}  key={index} />
                )
            }
            </div>
        </section>
                :
                <NotFound >
                    No se encontró ningún resultado
                </NotFound >
}

export default ProductList