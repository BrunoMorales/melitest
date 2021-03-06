import { render, fireEvent, screen } from '@testing-library/react'
import { MemoryRouter, Route } from 'react-router-dom'
import SearchResult from './SearchResult'
import {formatPrice} from '../../utils/formatters'
import { dummyResult } from '../../../__mocks__/dummies'


const renderWrapper = () => {
    let routeName = {}
    render(
        <MemoryRouter initialEntries={['/items']}>
            <SearchResult data={dummyResult} />
            <Route path='/items/:id'
            render={({  location }) => {
                routeName.location  = location;
                return null;
              }}/>
        </MemoryRouter>
    )
    return routeName
}

describe("SearchResult component renders and works as expected", ()=>{
    it('Displays result title, address, price and picture.', ()=>{
        renderWrapper()
        const title = screen.getByText(dummyResult.title)
        const address = screen.getByText(dummyResult.address)
        const price = screen.getByText(new RegExp( formatPrice(dummyResult.price.amount)))
        const picture = screen.getByRole('img')
        expect(title).toBeInTheDocument()
        expect(address).toBeInTheDocument()
        expect(picture).toBeInTheDocument()
        expect(price).toBeInTheDocument()
    })
    it('Redirects to item detail page when result is clicked', ()=> {
        const routeName = renderWrapper()
        const resultWrapper = screen.getByTestId('result-wrapper')
        fireEvent.click(resultWrapper)
        expect(routeName.location.pathname).toBe(`/items/${dummyResult.id}`)
    })

})