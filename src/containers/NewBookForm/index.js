import React, { Component } from 'react';

class NewBookForm extends Component {

  constructor(props){
    super(props);
    this.state = {
      bookTitle: '',
      bookAuthor: ''
    };
  }

  handleChangeTitle(e){
    this.setState({
      bookTitle: e.target.value
    });
  }

  handleChangeAuthor(e){
    this.setState({
      bookAuthor: e.target.value
    });

  }

  handleSubmit(e){
    console.log('***Test***');
    var newBook = {
      title: this.state.bookTitle,
      author: this.state.bookAuthor
    };
    e.preventDefault(); //need to check this
    this.props.addBook(newBook);
    this.setState({
      bookTitle: '',
      bookAuthor: ''
    });
  }

  render(){
    return (
      <div>

        <p>New Book Form</p>

        <form onSubmit={this.handleSubmit.bind(this)}>

          <label htmlFor="Title">Title</label>
          <input
            id="Title"
            type="text"
            placeholder="...Title"
            value={this.state.bookTitle}
            onChange={this.handleChangeTitle.bind(this)}
          />

          <label htmlFor="Author">Author</label>
          <input
            id="Title"
            type="text"
            placeholder="...Author"
            value={this.state.bookAuthor}
            onChange={this.handleChangeAuthor.bind(this)}
          />

          <button type="submit">Submit</button>

        </form>

      </div>
    );
  }
}

export default NewBookForm;