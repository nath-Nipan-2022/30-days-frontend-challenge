import { useState } from "react";
import Restaurant from "../components/restaurant";
import { FetchData } from "../services/fetchData";

const Restaurants = () => {
  const [filterBy, setFilterBy] = useState("all");
  const [sortOption, setSortOption] = useState("name");
  const [deletedId, setDeletedId] = useState(false);

  const { data: restaurants, isLoading, error } = FetchData();

  const filteredRestaurants = restaurants?.filter((restaurant) => {
    if (filterBy.toLowerCase() === "all") return true;
    return restaurant.cousin === filterBy.toLowerCase();
  });

  let sortedRestaurants =
    filteredRestaurants?.length < 1
      ? filteredRestaurants
      : filteredRestaurants.sort((restA, restB) => {
          if (typeof restA[sortOption] === "string") {
            return restA[sortOption].localeCompare(restB[sortOption]);
          } else {
            return restA[sortOption] - restB[sortOption];
          }
        });

  if (deletedId) {
    sortedRestaurants = sortedRestaurants.filter(
      (rest) => rest._id !== deletedId
    );
  }

  return (
    <main>
      <section className="container py-3">
        <h2 className="fs-1 py-4">Restaurant List</h2>

        {isLoading ? (
          <div className="p-3 mb-3 rounded bg-info-subtle">Loading...</div>
        ) : (
          ""
        )}
        {error && (
          <div className="p-3 rounded bg-danger-subtle">
            Something went wrong.
          </div>
        )}

        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Filter by Cuisine:
          </label>
          <select
            onChange={(e) => setFilterBy(e.target.value)}
            className="form-select"
            aria-label="Default select example"
          >
            <option value="all">All</option>
            <option value="italian">Italian</option>
            <option value="mexican">Mexican</option>
          </select>
        </div>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Sort Options:
          </label>
          <select
            onChange={(e) => setSortOption(e.target.value)}
            className="form-select"
            aria-label="Default select example"
          >
            <option value="name">Name</option>
            <option value="rating">Rating</option>
          </select>
        </div>

        {sortedRestaurants.length > 0 && (
          <div>
            <ul className="list-group">
              {sortedRestaurants.map((restaurant) => (
                <Restaurant
                  key={restaurant._id}
                  restaurant={restaurant}
                  onDelete={() => setDeletedId(restaurant._id)}
                />
              ))}
            </ul>
          </div>
        )}
      </section>
    </main>
  );
};
export default Restaurants;
