import { Link } from "react-router-dom";
import { MutateData } from "../services/mutateData";
import { useEffect } from "react";

function Restaurant({ restaurant, onDelete }) {
  const { action: deleteRestaurant, success } = MutateData();

  const handleDelete = () => {
    deleteRestaurant(`/${restaurant._id}`, {
      method: "DELETE",
    });
  };

  useEffect(() => {
    if (success) onDelete();
  }, [success, onDelete]);

  return (
    <li className="list-group-item">
      <article>
        <h4 className="fs-3">{restaurant.name}</h4>
        <p>Cousine: {restaurant.cuisine}</p>
        <p>City: {restaurant.city}</p>
        <p>Address: {restaurant.address}</p>
        <p>Rating: {restaurant.rating}</p>
      </article>

      <div className="d-flex gap-2 pb-2">
        <Link to={`/restaurant/${restaurant._id}`} className="btn btn-primary">
          View Details
        </Link>
        <button onClick={handleDelete} type="button" className="btn btn-danger">
          Delete
        </button>
        <Link
          to={`/update-restaurant/${restaurant._id}`}
          className="btn btn-warning"
        >
          Update
        </Link>
      </div>
    </li>
  );
}
export default Restaurant;
