import React from 'react'
import { Route } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import './App.css'
import ListAllBooks from './components/ListAllBooks'
import SearchBook from './components/SearchBook'


class BooksApp extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      books: [],
      booksShearch: [],
      loading: true,
      search: '',
    }
  }

  componentDidMount() {
    this.setState({ loading: true })
    this.loadBooks()
  }

  updateBook = (book, shelf) => {
    this.setState({ loading: true })
    BooksAPI.update(book, shelf).then(e => {
      book.shelf = shelf
      const books = this.state.books.filter(bookShearch => bookShearch.id !== book.id)
      books.push(book)
      this.state.booksShearch.filter(bookShearch => bookShearch.id === book.id).map(bookShearch => bookShearch.shelf = book.shelf)
      this.setState({ books, loading: false })
    }).catch(e => this.setState({ loading: false }))

  }

  shearchBook = (query) => {
    this.setState({ search: query })
    this.updateBooksShearch()
  }

  updateBooksShearch = () => {
    if (this.state.search.length > 0) {
      this.setState({ loading: true })
      BooksAPI.getAll().then((books) => BooksAPI.search(this.state.search, 20).then((booksShearch) => {
        if (booksShearch.error) {
          booksShearch = []
        } else {
          for (const book of books) {
            booksShearch.filter(bookShearch => bookShearch.id === book.id).map(bookShearch => bookShearch.shelf = book.shelf)
          }
        }
        this.setState({ booksShearch, loading: false })
      }).catch(e => this.setState({ booksShearch: [], loading: false })))
    } else {
      this.setState({ booksShearch: [] })
    }
  }


  loadBooks = () => BooksAPI.getAll().then((books) => this.setState({ books, loading: false }))

  render() {
    const { loading, books, search, booksShearch } = this.state
    return (
      <div className="app">
        <Route path='/search' render={({ history }) => (
          <SearchBook loading={loading} search={search} booksShearch={booksShearch} onUpdateBook={this.updateBook} onShearchBook={this.shearchBook} onClickReturn={() => history.push('/')} />
        )} />
        <Route exact path='/' render={({ history }) => (
          <ListAllBooks loading={loading} books={books} onUpdateBook={this.updateBook} onClickSearch={() => history.push('/search')} />
        )} />
      </div>
    )
  }
}

export default BooksApp
