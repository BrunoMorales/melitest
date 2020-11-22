import SearchBar from "./SearchBar"
import {shallow, configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('Searchbar displays and searches properly', ()=>{
    it('Renders the searchbar properly, with an image, a search box and a search button.', ()=>{
        expect(shallow(<SearchBar/>).find('img.header-logo')).toHaveLength(1)
        expect(shallow(<SearchBar/>).find('input.search-box')).toHaveLength(1)
        expect(shallow(<SearchBar/>).find('.search-button')).toHaveLength(1)
    })
    it('Redirects to main page when logo is clicked.', ()=>{
        
    })
    it('Redirects to a product list page for whatever the user wrote in box, when enter is pressed.', ()=>{
        
    })
    it('Redirects to a product list page for whatever the user wrote in box, when search button is clicked.', ()=>{
        
    })
})