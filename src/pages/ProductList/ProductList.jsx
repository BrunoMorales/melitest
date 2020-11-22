import React, {  useState } from "react";
import './ProductList.scss'
import SearchResult from "../../components/SearchResult";

const ELEMENTS_PER_PAGE = 4

const ProductList = (props) => {
    const [results, setResults] = useState([])

    return (
        <section >
            <div>
                {results.items.slice(0, ELEMENTS_PER_PAGE).map((result, index) =>
                    <SearchResult  key={index} />
                )}
            </div>
        </section>
    )
}

export default ProductList