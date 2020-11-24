import { render, fireEvent, screen } from '@testing-library/react'
import {  MemoryRouter,  Route } from 'react-router-dom'
import SearchBar from "./SearchBar"

const renderWrapper = (initialEntry) => {
    let  routeName = {};
    render(
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
    return routeName 
}

const userSearch = 'el juego'

describe('Searchbar displays and searches properly', ()=>{
    it('Renders the searchbar, with an image, a search box and a search button.', ()=>{
        renderWrapper('/')
        const searchLogo = screen.getByRole("img")
        const searchBtn = screen.getByTestId('search-btn')
        const searchBox = screen.getByRole("textbox")
        expect(searchBox).toBeInTheDocument()
        expect(searchLogo).toBeInTheDocument()
        expect(searchBtn).toBeInTheDocument()
    })
    it('Redirects to a product list page for whatever the user wrote in box, when enter is pressed.', ()=>{
        const routeName = renderWrapper('/')
        const searchBtn = screen.getByTestId('search-btn')
        const searchBox = screen.getByRole("textbox")
        fireEvent.change(searchBox, {target: {value: userSearch}})
        searchBox.focus()
        fireEvent.keyDown(searchBox, {target: {keycode: 13}})
        fireEvent.click(searchBtn)
        expect(routeName.location.pathname).toBe(`/items`)
        expect(routeName.location.search).toBe(`?search=${userSearch}`)
    })
    it('Redirects to a product list page for whatever the user wrote in box, when search button is clicked.', ()=>{
        const routeName = renderWrapper('/')
        const searchBtn = screen.getByTestId('search-btn')
        const searchBox = screen.getByRole("textbox")
        fireEvent.change(searchBox, {target: {value: userSearch}})
        fireEvent.click(searchBtn)
        expect(routeName.location.pathname).toBe(`/items`)
        expect(routeName.location.search).toBe(`?search=${userSearch}`)
    })
    it('Redirects to main page when logo is clicked.', ()=>{
        const routeName = renderWrapper('/items')
        const searchLogo = screen.getByRole('img')
        fireEvent.click(searchLogo)
        expect(routeName.location.pathname).toBe('/')
    })
})