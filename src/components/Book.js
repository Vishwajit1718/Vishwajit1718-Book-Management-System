// src/components/Book.js
import React from 'react';

const Book = ({ book, onDelete }) => {
  return (
    <div className="book">
      <div><h3>{book.title}</h3></div>
     <div> <h4>{book.author}</h4></div>
      <button onClick={() => onDelete(book.id)}>Delete</button>
    </div>
  );
};

export default Book;
