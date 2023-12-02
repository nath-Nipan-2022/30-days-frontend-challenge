import { Book } from "./Book";

export const BookLists = ({ books, onDelete }) => {
  const renderBooks = books.map((book) => (
    <Book key={book.id} book={book} onDelete={onDelete} />
  ));

  return <ul className="list-group">{renderBooks}</ul>;
};
