
import React from 'react'
import './ProductDetail.scss'

const ProductDetail= () => {

    return (
        <section className='product-detail'>
            <div className='product-container'>
                <div className='product-header'>
                    <img src={picture} alt='imagen_producto' className='product-picture' />
                    <div className='product-header-container'>
                        <p className='product-condition'>
                            {condition} - {sold_quantity} vendidos
                        </p>
                        <h1 className='product-title'>
                            {title}
                        </h1>
                        <p className='product-price'>
                            $ {price}
                        </p>
                        <button className='buy-btn'>
                            Comprar
                    </button>
                    </div>
                </div>
                <div className='product-description'>
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