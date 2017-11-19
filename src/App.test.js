import React from 'react'
import ReactDOM from 'react-dom'
import BooksApp from './App'
import { shallow } from 'enzyme'



it('App should be defined', () => {
  expect(BooksApp).toBeDefined()
})
it('App should be defined', () => {
  const component = shallow(<BooksApp/>)
  expect(component).toBeDefined()
})


