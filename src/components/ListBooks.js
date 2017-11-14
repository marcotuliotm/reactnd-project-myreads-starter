import React from 'react'
import BookView from './BookView'
import PropTypes from 'prop-types'
import Loader from 'halogen/PulseLoader'


function ListBooks(props) {


  const { title, books, loading } = props

  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{title}</h2>
      <div className="bookshelf-books">
        {loading ? (<Loader color="#26A65B" size="16px" margin="4px" />) : (
          <ol className="books-grid">
            {books.map((book) => (
              <li key={book.id}>
                <BookView book={book} onUpdateBook={props.onUpdateBook} />
              </li>
            ))}
          </ol>
        )}
      </div>
    </div>
  )
}

ListBooks.propTypes = {
  books: PropTypes.array.isRequired,
  title: PropTypes.string.isRequired,
  onUpdateBook: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
}

export default ListBooks
