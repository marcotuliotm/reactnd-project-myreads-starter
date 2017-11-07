import React, { Component } from 'react'
import BookView from './BookView'
import PropTypes from 'prop-types'


class SearchBook extends Component {

  static propTypes = {
    booksShearch: PropTypes.array.isRequired,
    onUpdateBook: PropTypes.func.isRequired,
    onShearchBook: PropTypes.func.isRequired,
    onClickReturn: PropTypes.func.isRequired,
  }

  render() {
    const { booksShearch, onUpdateBook, search, onShearchBook, onClickReturn } = this.props

    return (
      <div className="search-books">
        <div className="search-books-bar">
          <a className="close-search" onClick={() => onClickReturn()}>Close</a>
          <div className="search-books-input-wrapper">
            <input type="text" placeholder="Search by title or author" value={search} onChange={(event) => onShearchBook(event.target.value)} />
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
            {booksShearch.map((book) => (
              <li key={book.id}>
                <BookView book={book} onUpdateBook={onUpdateBook} />
              </li>
            ))}
          </ol>
        </div>
      </div>
    )
  }
}

export default SearchBook