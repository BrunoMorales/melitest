import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import  {FaSearch}  from 'react-icons/fa'
import './SearchBar.scss'

const SearchBar = (props) => {
    const params = props.location?.search.slice(8)
    const [searchInput, setSearchInput] = useState(params)
    const routerHistory = useHistory()

    useEffect(()=>{setSearchInput(params)}, [params])

    const searchLink = searchInput ? `/items?search=${searchInput}` : '/'
    const handleType = ({ target: { value } }) => setSearchInput(value)
    const submitOnEnter = ({keyCode}) => { if (keyCode === 13) { routerHistory.push(searchLink)} }
    const clearSearchbox = () => setSearchInput('')

    return (
        <div className='header'>
            <div className='search-wrapper'>
                <Link to='/' >
                    <img alt='meli_logo' className='search-logo'
                        src='https://http2.mlstatic.com/frontend-assets/ui-navigation/5.6.0/mercadolibre/logo__small.png' onClick={clearSearchbox} 
                    />
                </Link>
                <div className='searchbar'>
                    <input
                        value={searchInput}
                        onChange={handleType}
                        placeholder='Nunca dejes de buscar'
                        className='search-box'
                        onKeyDown={submitOnEnter} />
                    <Link to={searchLink} className='search-btn' data-testid='search-btn'>
                        <FaSearch alt='boton-buscar' />
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default SearchBar