import React from 'react'
import BookView from './BookView'
import PropTypes from 'prop-types'
import { DebounceInput } from 'react-debounce-input'
import Loader from 'halogen/PulseLoader'


function SearchBook(props) {

  const { booksShearch, onUpdateBook, search, onShearchBook, onClickReturn, loading } = props

  return (
    <div className="search-books">
      <div className="search-books-bar">
        <a className="close-search" onClick={() => onClickReturn()}>Close</a>
        <div className="search-books-input-wrapper">
          <DebounceInput minLength={2} debounceTimeout={500} type="text" placeholder="Search by title or author" value={search} onChange={(event) => onShearchBook(event.target.value)} />
        </div>
      </div>
      <div className="search-books-results">
        {loading ? (<Loader color="#26A65B" size="16px" margin="4px" />) : (
          <ol className="books-grid">
            {booksShearch.map((book) => (
              <li key={book.id}>
                <BookView book={book} onUpdateBook={onUpdateBook} />
              </li>
            ))}
          </ol>
        )}
      </div>
    </div>
  )
}

SearchBook.propTypes = {
  booksShearch: PropTypes.array.isRequired,
  onUpdateBook: PropTypes.func.isRequired,
  onShearchBook: PropTypes.func.isRequired,
  onClickReturn: PropTypes.func.isRequired,
  search: PropTypes.string.isRequired,
  loading: PropTypes.bool.isRequired,
}

export default SearchBook