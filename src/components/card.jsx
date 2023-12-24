function Card({ title, imgText, description }) {
  return (
    <div className="card h-100">
      <img
        src={"https://placehold.co/400x300/EFEFEFF/grey?text=" + imgText}
        className="card-img-top"
        alt="Dish 1"
      />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{description}</p>
      </div>
    </div>
  );
}
export default Card;
