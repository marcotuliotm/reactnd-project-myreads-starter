import React from 'react'
import { shallow } from 'enzyme'
import ListBooks from '../ListBooks'
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-15';
import { testBooks } from './booksData'

configure({ adapter: new Adapter() });




describe('<ListBooks />', () => {
  it('ListBooks should be defined', () => {
    expect(ListBooks).toBeDefined()
  })

  it('ListBooks should be defined', () => {
    const component = shallow(<ListBooks books={testBooks.books} onUpdateBook={()=>true} loading={true} title='test'/>)
    expect(component).toBeDefined()
	})
	
	it('ListBooks should be defined and loading=false', () => {
    const component = shallow(<ListBooks books={testBooks.books} onUpdateBook={()=>true} loading={false} title='test'/>)
    expect(component).toBeDefined()
  })
})