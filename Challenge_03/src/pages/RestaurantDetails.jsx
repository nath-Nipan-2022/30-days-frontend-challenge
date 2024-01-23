import { useParams } from "react-router-dom";
import { FetchData } from "../services/fetchData";

function RestaurantDetails() {
  const { id } = useParams();

  const { data: restaurant, isLoading, error } = FetchData(`/${id}`);

  return (
    <main>
      <section className="container py-3">
        <h2 className="fs-1 py-3">Restaurant Details</h2>
        {error && (
          <div className="p-3 rounded bg-danger-subtle">
            Something went wrong.
          </div>
        )}

        {isLoading ? (
          <div className="p-3 mb-3 rounded bg-info-subtle">Loading...</div>
        ) : (
          <article>
            <h4 className="fs-3">{restaurant.name}</h4>
            <p>Cousine: {restaurant.cuisine}</p>
            <p>City: {restaurant.city}</p>
            <p>Address: {restaurant.address}</p>
            <p>Rating: {restaurant.rating}</p>
          </article>
        )}

        <h2 className="fs-2 pt-3">Menu:</h2>
        <h2 className="fs-2 pt-3">Reviews:</h2>
      </section>
    </main>
  );
}
export default RestaurantDetails;
