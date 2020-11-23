import React, { Fragment, useEffect, useState } from 'react'
import {Link} from 'react-router-dom'
import './Breadcrumb.scss'
import fetchCategoryPath from '../../utils/fetchCategoryPath'
import  {FaChevronRight}  from 'react-icons/fa'

const Breadcrumb = ({categoryId}) => {
    const [breadcrumb, setBreadcrumb] = useState()
    useEffect(()=> {
        fetchCategoryPath(categoryId)
        .then((res)=>setBreadcrumb(res))
    })

    return (
        <nav className='breadcrumb'>
            {breadcrumb?.map(
                (category, index)=>( 
                <Fragment key={index}>
                    {index > 0 && <FaChevronRight className='category-divider'/>}
                    <Link to={`/items?search=${category.name}`} className='breadcrumb-link'>
                        {category.name}
                    </Link>
                </Fragment>
                )
            )}
        </nav>  
    )
}

export default Breadcrumb