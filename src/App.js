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

  updateBook = (book, shelf) => {
    BooksAPI.update(book, shelf).then(e => {
      this.loadBooks()
      this.updateBooksShearch()
    })
    book.shelf = shelf
  }

  shearchBook = (query) => {
    this.setState({ search: query })
    this.updateBooksShearch()
  }

  updateBooksShearch = () => BooksAPI.search(this.state.search, 20).then((booksShearch) => {
    if (booksShearch.error) {
      booksShearch = []
    }
    booksShearch.map((book) =>
      BooksAPI.get(book.id).then((serverBook) => book.shelf = serverBook.shelf)
    )
    this.setState({ booksShearch })
  }).catch(e => this.setState({ booksShearch: [] }))


  loadBooks = () => BooksAPI.getAll().then((books) => this.setState({ books }))

  render() {
    return (
      <div className="app">
        <Route path='/search' render={({ history }) => (
          <SearchBook search={this.state.search} booksShearch={this.state.booksShearch} onUpdateBook={this.updateBook} onShearchBook={this.shearchBook} onClickReturn={() => history.push('/')} />
        )} />
        <Route exact path='/' render={({ history }) => (
          <ListAllBooks books={this.state.books} onUpdateBook={this.updateBook} onClickSearch={() => history.push('/search')} />
        )} />
      </div>
    )
  }
}

export default BooksApp
