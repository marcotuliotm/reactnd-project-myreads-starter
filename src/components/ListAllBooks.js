import React, { Component } from 'react'
import ListBooks from './ListBooks'
import PropTypes from 'prop-types'

class ListAllBooks extends Component {

  static propTypes = {
    books: PropTypes.array.isRequired,
    onUpdateBook: PropTypes.func.isRequired
  }

  state = {
    showSearchPage: false,
  }

  render() {
    const { books } = this.props

    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>
            <ListBooks title="Currently Reading" books={books.filter((book) => book.shelf === "currentlyReading")} onUpdateBook={this.props.onUpdateBook} />
            <ListBooks title="Want to Read" books={books.filter((book) => book.shelf === "wantToRead")} onUpdateBook={this.props.onUpdateBook} />
            <ListBooks title="Read" books={books.filter((book) => book.shelf === "read")} onUpdateBook={this.props.onUpdateBook} />
          </div>
        </div>
        <div className="open-search">
          <a onClick={() => this.setState({ showSearchPage: true })}>Add a book</a>
        </div>
      </div>
    )
  }
}

export default ListAllBooks
