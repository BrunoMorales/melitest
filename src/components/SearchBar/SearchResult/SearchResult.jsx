import React from "react";
import './Result.scss'
import { Link } from "react-router-dom";

const Result = ({ props }) => {
    const {
        id,
        picture,
        price,
        title,
        address,
    } = props;
    return (
        <Link className='search-result'>
            <img src={picture} alt='imagen_articulo' className='main-picture' />
            <div className='result-data'>
                <div className='result-header'>
                    <p className='result-price'>
                        $ {price.amount} 
                    </p>
                    <h2 className='result-title'>
                        {title}
                    </h2>
                </div>
                <p className='result-location'>
                    {address}
                </p>
            </div>
        </Link>
    )
}

export default Result