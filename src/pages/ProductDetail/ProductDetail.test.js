import ProductDetail from './ProductDetail'
import { act, render, screen } from '@testing-library/react'
import { MemoryRouter, Route } from 'react-router-dom';
import {dummyProduct} from '../../apis/__mocks__/dummies'

jest.mock('../../apis/fetchProduct');

describe('Renders ProductDetail view correctly.', ()=> {
    it('Displays all required Product elements', async ()=>{
        await act( async() => {
            render(
                <MemoryRouter initialEntries={[`/items/${dummyProduct.item.id}`]}>
                   <Route path='/items/:id' component={ProductDetail} />
                </MemoryRouter>
            )
        });
            screen.getByAltText('imagen_producto')
            screen.getByText(dummyProduct.item.title)
            screen.getByText(dummyProduct.item.description)
            screen.getAllByText(new RegExp(dummyProduct.item.sold_quantity))
            screen.getAllByText(new RegExp(dummyProduct.item.price.amount))
    })
})
