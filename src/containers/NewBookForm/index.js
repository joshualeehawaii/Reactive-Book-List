import React, { Component } from 'react';

class NewBookForm extends Component {
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
          />

          <label htmlFor="Author">Author</label>
          <input
            id="Title"
            type="text"
            placeholder="...Author"
          />

          <input
            type="submit"
            value="Submit"
          />

        </form>

      </div>
    );
  }
}

export default NewBookForm;