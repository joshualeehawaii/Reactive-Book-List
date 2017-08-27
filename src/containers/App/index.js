import React, { Component } from 'react';
//import './App.css';
import BookListAppTitle from '../../components/BookListAppTitle';
import BookFilterInput from '../../components/BookFilterInput';
import BookList from '../BookList';
import NewBookForm from '../NewBookForm';
import { getBooksFromFakeXHR, addBookToFakeXHR } from '../../lib/books.db.js';
import Book from '../../components/Book';


class App extends Component {
  componentWillMount(){
    // initial state
    this.setState({
      books: [],
      bookFillterText: ''
    });

    getBooksFromFakeXHR()
      .then( books => {
        console.log(books);
        this.setState({
          books: books
        });
      })
      .catch(err => {
        console.log(err);
      });
  }

  handleFilterInputChange(e){ //e is the event
    this.setState({
      bookFillterText: e.target.value
    });
  }

  render() {
    return (
      <div className="App">

        <BookListAppTitle
        title="Josh's Book List"
        />

        <BookFilterInput
        filterInputChange={this.handleFilterInputChange.bind(this)} //reverse flow - changing the state back up the chain
        />

        <BookList
        filter={this.state.bookFillterText}
        books={this.state.books}
        />

        <NewBookForm />

      </div>
    );
  }
}

export default App;


