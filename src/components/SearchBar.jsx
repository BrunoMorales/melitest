import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import  {FaSearch}  from 'react-icons/fa'
import './SearchBar.scss'

const SearchBar = () => {
    const [searchInput, setSearchInput] = useState('')
    const routerHistory = useHistory()

    const searchLink = searchInput ? `/items?search=${searchInput}` : '/'
    const handleType = ({ target: { value } }) => setSearchInput(value)
    const submitOnEnter = (e) => { if (e.keyCode === 13) { routerHistory.push(searchLink)} }

    return (
        <div className='header'>
            <div className='search-wrapper'>
                <Link to='/' >
                    <img alt='meli_logo' className='header-logo'
                        src='https://http2.mlstatic.com/frontend-assets/ui-navigation/5.6.0/mercadolibre/logo__small.png' />
                </Link>
                <div className='searchbar'>
                    <input
                        value={searchInput}
                        onChange={handleType}
                        placeholder='Nunca dejes de buscar'
                        className='search-box'
                        onKeyDown={submitOnEnter} />
                    <Link to={searchLink} className='search-button'>
                        <FaSearch/>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default SearchBar