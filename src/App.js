import React from 'react'
import { Route } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import './App.css'
import ListAllBooks from './components/ListAllBooks'

class BooksApp extends React.Component {
  state = {
    books: [],
  }

  componentDidMount() {
    this.loadBooks()
  }

  updateBook = (book, shelf) => BooksAPI.update(book, shelf).then(e => this.loadBooks())

  loadBooks = () => {
    BooksAPI.getAll().then((books) => {
      this.setState({ books })
    })
  }

  render() {
    return (
      <div className="app">
        <Route path='/search' render={({ history }) => (
          <div className="search-books">
            <div className="search-books-bar">
              <a className="close-search" onClick={() => history.push('/')}>Close</a>
              <div className="search-books-input-wrapper">
                {/*
                  NOTES: The search from BooksAPI is limited to a particular set of search terms.
                  You can find these search terms here:
                  https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

                  However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                  you don't find a specific author or title. Every search is limited by search terms.
                */}
                <input type="text" placeholder="Search by title or author" />

              </div>
            </div>
            <div className="search-books-results">
              <ol className="books-grid"></ol>
            </div>
          </div>
        )} />
        <Route exact path='/' render={({ history }) => (
          <ListAllBooks books={this.state.books} onUpdateBook={this.updateBook} onClickSearch={()=>history.push('/search')}/>
        )} />
      </div>
    )
  }
}

export default BooksApp
