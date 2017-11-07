import React, { Component } from 'react'
import BookView from './BookView'
import PropTypes from 'prop-types'


class ListBooks extends Component {

  static propTypes = {
    books: PropTypes.array.isRequired,
    title: PropTypes.string.isRequired,
    onUpdateBook: PropTypes.func.isRequired
  }

  render() {
    const { title, books } = this.props

    return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">{title}</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            {books.map((book) => (
              <li key={book.id}>
                <BookView book={book} onUpdateBook={this.props.onUpdateBook} />
              </li>
            ))}
          </ol>
        </div>
      </div>
    )
  }
}

export default ListBooks
