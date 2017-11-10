import React from 'react'
import { Route } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import './App.css'
import ListAllBooks from './components/ListAllBooks'
import SearchBook from './components/SearchBook'
import Loader from 'halogen/PulseLoader'


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
      this.loadBooks()
      this.updateBooksShearch()
    })

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
    return (
      <div>
        {this.state.loading ? (<Loader color="#26A65B" size="16px" margin="4px" />) : (<div className="app">
          <Route path='/search' render={({ history }) => (
            <SearchBook search={this.state.search} booksShearch={this.state.booksShearch} onUpdateBook={this.updateBook} onShearchBook={this.shearchBook} onClickReturn={() => history.push('/')} />
          )} />
          <Route exact path='/' render={({ history }) => (
            <ListAllBooks books={this.state.books} onUpdateBook={this.updateBook} onClickSearch={() => history.push('/search')} />
          )} />
        </div>)}
      </div>
    )
  }
}

export default BooksApp
