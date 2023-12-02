export const Book = ({ book, onDelete }) => {
  return (
    <div className="list-group-item d-flex p-3 align-items-center">
      <div className="d-flex flex-fill align-items-center">
        <h4 className="flex-fill m-0">{book.title}</h4>
        <p className="m-0">by {book.author},</p>
      </div>
      <div className="flex-fill px-2"> Year: {book.publication_year}</div>

      <button
        type="button"
        className="btn btn-danger"
        onClick={() => onDelete(book.id)}
      >
        Remove
      </button>
    </div>
  );
};
