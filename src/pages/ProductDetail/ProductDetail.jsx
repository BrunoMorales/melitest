
import React, {useEffect, useState} from 'react'
import './ProductDetail.scss'
import fetchProduct from '../../utils/fetchProduct'
import Breadcrumb from '../../components/Breadcrumb'

const ProductDetail= (props) => {
    const productId = props.location?.pathname.slice(7)
    const [product, setProduct] = useState()

    useEffect(() => {
        productId &&
            fetchProduct(productId)
                .then(
                    (product) => setProduct(product?.item)
                )
    }, [productId])

    return (
        <section className='product-detail'>
            <Breadcrumb categoryId={product?.category}/>
            <div className='product-container'>
                <div className='product-header'>
                    <img src={product?.picture} alt='imagen_producto' className='product-picture' />
                    <div className='product-header-container'>
                        <p className='product-condition'>
                            {product?.condition} - {product?.sold_quantity} vendidos
                        </p>
                        <h1 className='product-title'>
                            {product?.title}
                        </h1>
                        <p className='product-price'>
                            $ {product?.price?.amount}
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
                        {product?.description}
                    </p>
                </div>
            </div>
        </section>
    )
}

export default ProductDetail