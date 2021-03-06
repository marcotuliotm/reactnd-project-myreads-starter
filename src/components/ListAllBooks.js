import React from 'react'
import ListBooks from './ListBooks'
import PropTypes from 'prop-types'

function ListAllBooks(props) {

  const { books, onUpdateBook, onClickSearch, loading } = props

  return (
    <div className="list-books">
      <div className="list-books-title">
        <h1>MyReads</h1>
      </div>
      <div className="list-books-content">
        <div>
          <ListBooks loading={loading} title="Currently Reading" books={books.filter((book) => book.shelf === "currentlyReading")} onUpdateBook={onUpdateBook} />
          <ListBooks loading={loading} title="Want to Read" books={books.filter((book) => book.shelf === "wantToRead")} onUpdateBook={onUpdateBook} />
          <ListBooks loading={loading} title="Read" books={books.filter((book) => book.shelf === "read")} onUpdateBook={onUpdateBook} />
        </div>
      </div>
      <div className="open-search">
        <a onClick={() => onClickSearch()}>Add a book</a>
      </div>
    </div>
  )

}

ListAllBooks.propTypes = {
  books: PropTypes.array.isRequired,
  onUpdateBook: PropTypes.func.isRequired,
  onClickSearch: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
}

export default ListAllBooks
