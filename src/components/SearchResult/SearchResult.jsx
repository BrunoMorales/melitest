import React from "react";
import './SearchResult.scss'
import { Link } from "react-router-dom";
import { formatPrice } from "../../utils/formatters";

const Result = ({ data }) => {
    const {
        id,
        picture,
        price,
        title,
        address,
        free_shipping
    } = data;
    return (
        <Link className='search-result'  to={{ pathname: `/items/${id}`, state: { product: data } }} data-testid='result-wrapper'>
            <img src={picture} alt='imagen_articulo' className='main-picture' />
            <div className='result-data'  >
                <div className='result-header'>
                    <p className='result-price' >
                        $ {formatPrice(price.amount)} {free_shipping && <span className='free-shipping' />}
                    </p>
                    <h2 className='result-title' >
                        {title}
                    </h2>
                </div>
                <p className='result-location' >
                    {address}
                </p>
            </div>
        </Link>
    )
}

export default Result