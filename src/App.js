import React from 'react'
import { Route } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import './App.css'
import ListAllBooks from './components/ListAllBooks'
import SearchBook from './components/SearchBook'


class BooksApp extends React.Component {
  state = {
    books: [],
    booksShearch: [],
    search: '',
  }

  componentDidMount() {
    this.loadBooks()
  }

  updateBook = (book, shelf) => BooksAPI.update(book, shelf).then(e => this.loadBooks())

  shearchBook = (query) => {
    this.setState({ search: query })
    BooksAPI.search(query, 20).then((booksShearch) => this.setState({ booksShearch })).catch(e => this.setState({ booksShearch: [] }))
  }

  loadBooks = () => BooksAPI.getAll().then((books) => this.setState({ books }))

  render() {
    return (
      <div className="app">
        <Route path='/search' render={({ history }) => (
          <SearchBook search={this.state.shearch} booksShearch={this.state.booksShearch} onUpdateBook={this.updateBook} onShearchBook={this.shearchBook} onClickReturn={() => history.push('/')} />
        )} />
        <Route exact path='/' render={({ history }) => (
          <ListAllBooks books={this.state.books} onUpdateBook={this.updateBook} onClickSearch={() => history.push('/search')} />
        )} />
      </div>
    )
  }
}

export default BooksApp
