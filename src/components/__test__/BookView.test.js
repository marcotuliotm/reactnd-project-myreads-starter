import React from 'react'
import { shallow } from 'enzyme'
import BookView from '../BookView'
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-15';
import { testBooks } from './booksData'

configure({ adapter: new Adapter() });




describe('<BookView />', () => {
  it('BookView should be defined', () => {
    expect(BookView).toBeDefined()
  })

  it('BookView should be defined', () => {
    const component = shallow(<BookView book={testBooks.books[0]} onUpdateBook={()=>true} />)
    expect(component).toBeDefined()
	})
	
	it('BookView should be defined and shelf=none', () => {
    const component = shallow(<BookView book={testBooks.books[2]} onUpdateBook={(e)=>true} />)
    expect(component).toBeDefined()
  })
})