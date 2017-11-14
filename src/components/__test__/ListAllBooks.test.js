import React from 'react'
import { shallow } from 'enzyme'
import ListAllBooks from '../ListAllBooks'
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-15';
import { testBooks } from './booksData'

configure({ adapter: new Adapter() });




describe('<ListAllBooks />', () => {
  it('ListAllBooks should be defined', () => {
    expect(ListAllBooks).toBeDefined()
  })

  it('ListAllBooks should be defined', () => {
    const component = shallow(<ListAllBooks books={testBooks.books} onClickSearch={()=>true} onUpdateBook={()=>true} loading={true} title='test'/>)
    expect(component).toBeDefined()
	})
	
	it('ListAllBooks should be defined and loading=false', () => {
    const component = shallow(<ListAllBooks books={testBooks.books} onClickSearch={()=>true} onUpdateBook={()=>true} loading={false} title='test'/>)
    expect(component).toBeDefined()
  })
})