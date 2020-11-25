import ProductList from './ProductList'
import { act, render, screen } from '@testing-library/react'
import { MemoryRouter, Route } from 'react-router-dom';
import {dummySearchResults} from '../../apis/__mocks__/dummies'

jest.mock('../../apis/fetchResults');

const DummyResultTitles = dummySearchResults.items.map(result=>result.title)

describe('Renders ProductList view correctly.', ()=> {
    it('Displays all required Results (Searching by title)', async ()=>{
        await act( async() => {
            render(
                <MemoryRouter initialEntries={[`/items?search=test`]}>
                   <Route path='/items' component={ProductList} />
                </MemoryRouter>
            )
        });
        DummyResultTitles.map((resultTitle)=> screen.getByText(resultTitle)
        )
    })
})
