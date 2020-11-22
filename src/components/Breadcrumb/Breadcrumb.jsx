import React, { useEffect, useState } from 'react'
import './Breadcrumb.scss'
import fetchCategoryPath from '../../utils/fetchCategoryPath'

const Breadcrumb = ({categoryId}) => {
    const [breadcrumb, setBreadcrumb] = useState()
    useEffect(()=> {
        fetchCategoryPath(categoryId)
        .then((res)=>setBreadcrumb(res))
    })

    return (
        <nav>
            {breadcrumb?.map(
                (category, index)=>(
                        <Link key={index} to={`/items?search=${category.name}`}>
                            {category.name}
                        </Link>
                )
            )}
        </nav>  
    )
}

export default Breadcrumb