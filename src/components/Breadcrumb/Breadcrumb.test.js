import Breadcrumb from './Breadcrumb'
import { act, fireEvent, getByText, render, screen } from '@testing-library/react'
import { MemoryRouter, Route } from 'react-router-dom';
import {dummyCategoryPath} from '../../apis/__mocks__/dummies'

jest.mock('../../apis/fetchCategoryPath');

const categoryNames=dummyCategoryPath.map(category=>category.name)

const renderWrapper = () => {
    let routeName = {}
    render(
        <MemoryRouter initialEntries={['/']}>
            <Route path='/items'
            render={({  location }) => {
                routeName.location  = location;
                return null;
              }}/>
              <Route path='/' component={Breadcrumb}
                render={({  location }) => {
                routeName.location  = location;
                return null;
              }}/>
        </MemoryRouter>
    )
    return routeName
}

describe('Renders Breadcrumb view correctly.', ()=> {
    it('Displays all required Product elements', async ()=>{
        await act(async()=>renderWrapper())
        categoryNames.map((categoryName)=>
        screen.getByText(categoryName))
    })
    it('Redirects to category search page when result is clicked', async ()=> {
        let routeName
        await act(async()=> routeName = renderWrapper())
        screen.debug( screen.getByText(categoryNames[0]))
        fireEvent.click(screen.getByText(categoryNames[0]))
        expect(routeName.location.pathname).toBe(`/items`)
        expect(routeName.location.search).toBe(`?search=${categoryNames[0]}`)
    })
})
