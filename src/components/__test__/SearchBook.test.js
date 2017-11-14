import React from 'react'
import { shallow } from 'enzyme'
import SearchBook from '../SearchBook'
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-15';
import { testBooks } from './booksData'

configure({ adapter: new Adapter() });




describe('<SearchBook />', () => {
  it('SearchBook should be defined', () => {
    expect(SearchBook).toBeDefined()
  })

  it('SearchBook should be defined', () => {
    const component = shallow(<SearchBook search='' onShearchBook={()=>true} booksShearch={testBooks.books} onUpdateBook={()=>true} onClickReturn={()=>true} loading={true} />)
    expect(component).toBeDefined()
	})
	
	it('SearchBook should be defined and loading=false', () => {
    const component = shallow(<SearchBook search='test' onShearchBook={()=>true} booksShearch={testBooks.books} onUpdateBook={()=>true} onClickReturn={()=>true} loading={false} />)
    expect(component).toBeDefined()
  })
})