import React, { Component } from 'react'
import * as BooksAPI from '../BooksAPI'
import BookView from './BookView'


class ListBooks extends Component {
  
  state = {
    showSearchPage: false,
    books: [],
  }

  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState({ books })
    })
    console.log('books', this)
  }

  render() {
   
    return (
     <div className="list-books">
     <div className="list-books-title">
       <h1>MyReads</h1>
     </div>
     <div className="list-books-content">
       <div>
         <div className="bookshelf">
           <h2 className="bookshelf-title">Currently Reading</h2>
           <div className="bookshelf-books">
             <ol className="books-grid">
                {this.state.books.map((book) => (
                  <li key={book.id}>
                    <BookView book={book} />
                  </li>
                ))}            
             </ol>
           </div>
         </div>
         <div className="bookshelf">
           <h2 className="bookshelf-title">Want to Read</h2>
           <div className="bookshelf-books">
            <ol className="books-grid">
              {this.state.books.map((book) => (
                <li key={book.id}>
                  <BookView book={book} />
                </li>
              ))}            
           </ol>
          </div>
         </div>
         <div className="bookshelf">
           <h2 className="bookshelf-title">Read</h2>
           <div className="bookshelf-books">
            <ol className="books-grid">
              {this.state.books.map((book) => (
                <li key={book.id}>
                  <BookView book={book} />
                </li>
              ))}            
            </ol>
          </div>
         </div>
       </div>
     </div>
     <div className="open-search">
       <a onClick={() => this.setState({ showSearchPage: true })}>Add a book</a>
     </div>
   </div>
    )
  }
}

export default ListBooks
