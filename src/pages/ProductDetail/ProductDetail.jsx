
import React from 'react'
import './ProductDetail.scss'

const ProductDetail= () => {

    return (
        <section>
            <div >
                <div >
                    <img src={picture} />
                    <div>
                        <p >
                            {condition} - {sold_quantity} vendidos
                    </p>
                        <h1 >
                            {title}
                        </h1>
                        <p >
                            $ {price}
                        </p>
                        <button >
                            Comprar
                    </button>
                    </div>
                </div>
                <div >
                    <h2>
                        Descripción del producto
                    </h2>
                    <p >
                        {description}
                    </p>
                </div>
            </div>
        </section>
    )
}

export default ProductDetail