import React, { Component } from 'react'
import PropTypes from 'prop-types'


class BookView extends Component {
  
  static propTypes = {
    book: PropTypes.object.isRequired,
    onUpdateBook: PropTypes.func.isRequired
  }

  render() {
    const { title, authors, imageLinks, shelf } = this.props.book

    return (
      <div className="book">
        <div className="book-top">
          <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${imageLinks.smallThumbnail})` }}></div>
          <div className="book-shelf-changer">
            <select  defaultValue={shelf} onClick={(e) => this.props.onUpdateBook(this.props.book,e.target.value)}>
              <option value="none" disabled>Move to...</option>
              <option value="currentlyReading">Currently Reading</option>
              <option value="wantToRead">Want to Read</option>
              <option value="read">Read</option>
              <option value="none">None</option>
            </select>
          </div>
        </div>
        <div className="book-title">{title}</div>
        <div className="book-authors">{authors}</div>
      </div>
    )
  }
}

export default BookView