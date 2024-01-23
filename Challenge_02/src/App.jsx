import "bootstrap/dist/css/bootstrap.min.css";

import { useState } from "react";
import { BookLists } from "./components/BookList";
import { CreateBook } from "./components/CreateBook";

function App() {
  const [Books, setBooks] = useState([]);
  const removeBook = (id) => {
    setBooks(Books.filter((book) => book.id !== id));
  };

  const addBook = (book) => {
    setBooks([...Books, book]);
  };

  return (
    <div className="container">
      <header className="py-5">
        <h1>Book Library</h1>
        <p className="mt-2 pb-2 fw-medium">Manage Your Book Collection</p>
        <CreateBook onCreate={addBook} />
        <BookLists books={Books} onDelete={removeBook} />
      </header>
    </div>
  );
}

export default App;
