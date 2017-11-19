import React from 'react'
import { shallow } from 'enzyme'
import SearchBook from '../SearchBook'
import { testBooks } from './booksData'


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

  it("executando linha 15", () => {
    const clickReturn = jest.fn();
    const test = shallow(<SearchBook search='test' onShearchBook={()=>true} booksShearch={testBooks.books} onUpdateBook={()=>true} onClickReturn={clickReturn} loading={false} />)
    test.find("a").simulate("click");
    expect(clickReturn).toHaveBeenCalledTimes(1);
  })

  it("executando linha 17", () => {
    const shearchBook = jest.fn();
    const test = shallow(<SearchBook search='test' onShearchBook={shearchBook} booksShearch={testBooks.books} onUpdateBook={()=>true} onClickReturn={()=>true} loading={false} />)
    test.find('DebounceInput').simulate('change', { target: {value:'some value'} })
    expect(shearchBook).toHaveBeenCalledTimes(1);
  })
})