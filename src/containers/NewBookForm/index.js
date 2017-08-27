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

  handleSubmit(){
    var newBook = {
      title: this.state.bookTitle,
      author: this.state.bookAuthor
    };

    this.props.addBooks(newBook);

  }

  render(){
    return (
      <div>

        <p>New Book Form</p>

        <form action="">

          <label htmlFor="Title">Title</label>
          <input
            id="Title"
            type="text"
            placeholder="...Title"
            onChange={this.handleChangeTitle.bind(this)}
          />

          <label htmlFor="Author">Author</label>
          <input
            id="Title"
            type="text"
            placeholder="...Author"
            onChange={this.handleChangeAuthor.bind(this)}
          />

          <button onClick={this.handleSubmit.bind(this)}>Submit</button>

        </form>

      </div>
    );
  }
}

export default NewBookForm;