import React, { Component } from 'react';

const BookFilterInput = ({ filterInputChange }) => {
  return (
    <div className="book-filter">
      <label htmlFor="book-filter">Filter Books</label>
      <input id="book-filter" type="text" onChange={filterInputChange} />
    </div>
  )
}

export default BookFilterInput;