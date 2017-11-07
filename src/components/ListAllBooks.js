import React, { Component } from 'react'
import ListBooks from './ListBooks'
import PropTypes from 'prop-types'

class ListAllBooks extends Component {

  static propTypes = {
    books: PropTypes.array.isRequired,
    onUpdateBook: PropTypes.func.isRequired,
    onClickSearch: PropTypes.func.isRequired,
  }

  render() {
    const { books, onUpdateBook, onClickSearch } = this.props

    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>
            <ListBooks title="Currently Reading" books={books.filter((book) => book.shelf === "currentlyReading")} onUpdateBook={onUpdateBook} />
            <ListBooks title="Want to Read" books={books.filter((book) => book.shelf === "wantToRead")} onUpdateBook={onUpdateBook} />
            <ListBooks title="Read" books={books.filter((book) => book.shelf === "read")} onUpdateBook={onUpdateBook} />
          </div>
        </div>
        <div className="open-search">
          <a onClick={() => onClickSearch()}>Add a book</a>
        </div>
      </div>
    )
  }
}

export default ListAllBooks
