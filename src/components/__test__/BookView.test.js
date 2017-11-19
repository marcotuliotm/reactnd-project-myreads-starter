import React from 'react'
import { shallow } from 'enzyme'
import BookView from '../BookView'
import { testBooks } from './booksData'


describe('<BookView />', () => {
  it('BookView should be defined', () => {
    expect(BookView).toBeDefined()
  })

  it('BookView should be defined', () => {
    const updateBook = jest.fn();
    const component = shallow(<BookView book={testBooks.books[0]} onUpdateBook={updateBook} />)
    expect(component).toBeDefined()
	})
	
	it('BookView should be defined and shelf=none', () => {
    const updateBook = jest.fn();
    const component = shallow(<BookView book={testBooks.books[2]} onUpdateBook={updateBook} />)
    expect(component).toBeDefined()
  })

  it("executando linha 22", () => {
    const updateBook = jest.fn();
    const test = shallow(<BookView book={testBooks.books[0]} onUpdateBook={updateBook} />)
    test.find("select").simulate("change",{
      target: "read"
    });
    expect(updateBook).toHaveBeenCalledTimes(1);
  })
})