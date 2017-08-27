import React, { Component } from 'react';
import Book from '../../components/Book';

class BookList extends Component {
  render(){
    console.log('these are the props',this.props);
    console.log(this.props.filter);
    return (
      <div>
        <ul>
          {
            this.props.books

            .filter(book => {
              if (this.props.filter){
                return book.title.toLowerCase().indexOf(this.props.filter.toLowerCase()) > -1
              } else {
                return book
              }
              return this.props.filter ? book.author.toLowerCase().indexOf(this.props.filter) > -1 : book;
            })

            .map(book => {
              return (
                <Book
                  title={book.title}
                  author={book.author}
                  key={book._id}
                />
              )
            })
          }
        </ul>
      </div>
    );
  }
}

export default BookList;