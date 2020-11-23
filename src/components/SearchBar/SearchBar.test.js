import { render, fireEvent } from '@testing-library/react'
import {  MemoryRouter, useLocation, Route } from 'react-router-dom'
import SearchBar from "./SearchBar"

const setUp = (initialEntry) => {
    let  routeName = {};

    const rendered = render(
        <MemoryRouter initialEntries={[initialEntry]}>
            <SearchBar />
            <Route path='/items'
            render={({  location }) => {
                routeName.location  = location;
                return null;
              }}/>
           <Route path='/'
            render={({  location }) => {
                routeName.location  = location;
                return null;
              }}/>
        </MemoryRouter>
        )
        return {rendered, routeName }
}


describe('Searchbar displays and searches properly', ()=>{
    it('Renders the searchbar, with an image, a search box and a search button.', ()=>{
        const { rendered} = setUp('/')
        const {getByRole}=rendered
        const searchLogo = getByRole("search-logo")
        const searchBtn = getByRole("search-btn")
        const searchBox = getByRole("search-box")
        expect(searchBox).not.toBeNull()
        expect(searchLogo).not.toBeNull()
        expect(searchBtn).not.toBeNull()
    })
    it('Redirects to a product list page for whatever the user wrote in box, when enter is pressed.', ()=>{
        const userSearch = 'lego'
        const {rendered, routeName} = setUp('/')

        const { getByRole } = rendered
        
        const searchBox = getByRole("search-box")
        const searchBtn = getByRole("search-btn")

        fireEvent.change(searchBox, {target: {value: userSearch}})
        searchBox.focus()
        fireEvent.keyDown(searchBox, {target: {keycode: 13}})
        fireEvent.click(searchBtn)
      
        expect(routeName.location.pathname).toBe(`/items`)
        expect(routeName.location.search).toBe(`?search=${userSearch}`)
    })
    it('Redirects to a product list page for whatever the user wrote in box, when search button is clicked.', async ()=>{
        const userSearch = 'lego'
        const {rendered, routeName} = setUp('/')

        const { getByRole } = rendered
        
        const searchBox = getByRole("search-box")
        const searchBtn = getByRole("search-btn")

        fireEvent.change(searchBox, {target: {value: userSearch}})
        fireEvent.click(searchBtn)
      
        expect(routeName.location.pathname).toBe(`/items`)
        expect(routeName.location.search).toBe(`?search=${userSearch}`)
    })
    it('Redirects to main page when logo is clicked.', ()=>{
       const { routeName, rendered} = setUp('/items')
       const {getByRole}= rendered
       const searchLogo = getByRole('search-logo')
        fireEvent.click(searchLogo)
         
        expect(routeName.location.pathname).toBe('/')
    })
})