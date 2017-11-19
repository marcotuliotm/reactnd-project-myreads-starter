import React from 'react'
import { shallow } from 'enzyme'
import ListAllBooks from '../ListAllBooks'
import { testBooks } from './booksData'

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

  it("executando linha 22", () => {
    const clickSearch = jest.fn();
    const test = shallow(<ListAllBooks books={testBooks.books} onClickSearch={clickSearch} onUpdateBook={()=>true} loading={false} title='test'/>)
    test.find("a").simulate("click");
    expect(clickSearch).toHaveBeenCalledTimes(1);
  })
})