// src/App.js
import React, { useState } from 'react';
import BookList from './components/BookList';
import BookForm from './components/BookForm';
import './index.js';

const App = () => {
  const [books, setBooks] = useState([
    { id: 1, title: 'Atomic Habits', author: 'James Clear' },
    { id: 2, title: 'To Kill a Mockingbird', author: 'Harper Lee' },
    { id: 3, title: 'Lolita', author: 'Vladimir Nabokov' },
    { id: 4, title: '1984', author: 'George Orwell'},
    { id: 5, title: 'Maha Kavitha', author: '	Vairamuthu'},
    {id: 6, title:'Four Stars of Destiny', author:'General Manoj Mukund Naravane'},
    {id:7, title:'Making India Awesome', author: 'Chetan Bhagat'},
    {id:8, title:'A Bend in the River ', author: 'V.S. Naipaul '},
    {id:9, title:'A Brush with Life ', author: 'Satish Gujral'},
    {id:10, title:'My Truth ', author:'Indira Gandhi'},
  ]);


  const addBook = (book) => {
    setBooks([...books, { id: books.length + 1, ...book }]);
  };

  const deleteBook = (id) => {
    setBooks(books.filter((book) => book.id !== id));
  };

  return (
    <div className="app">
      <header className="header">
        <h1>Book Management System</h1>
      </header>
      <BookForm onAdd={addBook} />
      <BookList books={books} onDelete={deleteBook} />
      <footer className="footer">
        <p>&copy; 2024 Book Management System</p>
      </footer>
    </div>
  );
};

export default App;
