import SearchBar from "./SearchBar"
import {shallow } from 'enzyme'


describe('Searchbar displays and searches properly', ()=>{
    const searchBarWrapper = shallow(<SearchBar/>)
    it('Renders the searchbar properly, with an image, a search box and a search button.', ()=>{
        expect(searchBarWrapper.find('img.header-logo')).toHaveLength(1)
        expect(searchBarWrapper.find('input.search-box')).toHaveLength(1)
        expect(searchBarWrapper.find('.search-button')).toHaveLength(1)
    })
    it('Redirects to main page when logo is clicked.', ()=>{
        
    })
    it('Redirects to a product list page for whatever the user wrote in box, when enter is pressed.', ()=>{
        
    })
    it('Redirects to a product list page for whatever the user wrote in box, when search button is clicked.', ()=>{
        
    })
})