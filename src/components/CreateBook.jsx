import { useState } from "react";

export const CreateBook = ({ onCreate }) => {
  const [book, setBook] = useState({
    title: "",
    author: "",
    publication_year: "",
    id: 0,
  });

  const handleFormInput = (e) => {
    setBook({
      ...book,
      [e.target.name]: e.target.value,
      id: Math.random() * 200,
    });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (book) onCreate(book);
    setBook({ title: "", author: "", publication_year: 0 });
  };

  return (
    <form onSubmit={handleFormSubmit} className="input-group mb-3">
      <input
        type="text"
        value={book.title}
        className="form-control"
        placeholder="Book Title"
        aria-label="Book Title"
        onChange={handleFormInput}
        required
        name="title"
      />
      <input
        type="text"
        value={book.author}
        className="form-control"
        placeholder="Author"
        aria-label="Author"
        name="author"
        onChange={handleFormInput}
        required
      />
      <input
        type="number"
        value={book.publication_year}
        className="form-control"
        placeholder="Publication Year"
        aria-label="Publication Year"
        onChange={handleFormInput}
        required
        name="publication_year"
      />
      <button
        type="submit"
        className="btn btn-primary"
        style={{ background: "#007bff" }}
      >
        Add Book
      </button>
    </form>
  );
};
