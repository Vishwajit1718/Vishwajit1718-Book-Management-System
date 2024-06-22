// src/components/BookList.js
import React from 'react';
import Book from './Book';

const BookList = ({ books, onDelete }) => {
  return (
    <div className="book-list">
      {books.map((book) => (
        <Book key={book.id} book={book} onDelete={onDelete} />
      ))}
    </div>
  );
};

export default BookList;
