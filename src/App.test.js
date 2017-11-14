import React from 'react'
import ReactDOM from 'react-dom'
import BooksApp from './App'


import { shallow } from 'enzyme'
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-15';


configure({ adapter: new Adapter() });



it('App should be defined', () => {
  expect(BooksApp).toBeDefined()
})
it('App should be defined', () => {
  const component = shallow(<BooksApp/>)
  expect(component).toBeDefined()
})


