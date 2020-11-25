import { render } from '@testing-library/react'
import NotFound from './NotFound'

describe('NotFound component renders as expected.', ()=>{
    it('Renders the text passed to it as children.', ()=> {
        const { getByText } = render(<NotFound>Pizza</NotFound>)
        getByText('Pizza')
    })
})