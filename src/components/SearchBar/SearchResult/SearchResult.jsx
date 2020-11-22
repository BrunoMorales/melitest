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
        <Link >
            <img src={picture} />
                <div>
                    <p >
                        $ {price.amount}
                    </p>
                    <h2 >
                        {title}
                    </h2>
                </div>
                <p >
                    {address}
                </p>
        </Link>
    )
}

export default Result