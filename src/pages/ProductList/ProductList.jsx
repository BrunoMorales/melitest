import React, {  useState } from "react";
import './ProductList.scss'
import SearchResult from "../../components/SearchResult";

const ELEMENTS_PER_PAGE = 4

const ProductList = (props) => {
    const [results, setResults] = useState()

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