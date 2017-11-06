import React, { Component } from 'react'
import * as BooksAPI from '../BooksAPI'
import ListBooks from './ListBooks'


class ListAllBooks extends Component {
  
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
//read Read
  render() {
   
    return (
     <div className="list-books">
     <div className="list-books-title">
       <h1>MyReads</h1>
     </div>
     <div className="list-books-content">
       <div>
         <ListBooks title="Currently Reading" books={this.state.books.filter((book)=>book.shelf==="currentlyReading")}/>
         <ListBooks title="Want to Read" books={this.state.books.filter((book)=>book.shelf==="wantToRead")}/>
         <ListBooks title="Read" books={this.state.books.filter((book)=>book.shelf==="read")}/>
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
