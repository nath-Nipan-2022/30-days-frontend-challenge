import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { FetchData } from "../services/fetchData";
import { MutateData } from "../services/mutateData";

function AddRestaurant() {
  const { id } = useParams();
  const [formData, setFormData] = useState({});

  const { data: defaultData, isLoading: isRestLoading } = FetchData(
    id ? `/${id}` : ""
  );

  useEffect(() => {
    if (defaultData) setFormData(defaultData);
  }, [defaultData]);

  const { action: addRestaurant, isLoading, success, error } = MutateData();

  const handleFormChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addRestaurant(id ? `/${id}` : "", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });
  };

  let statusContent = "";
  if (isLoading || (id && isRestLoading)) {
    statusContent = (
      <div className="alert alert-info" role="alert">
        {isRestLoading ? "Loading" : "Sending"} data...
      </div>
    );
  } else if (error) {
    statusContent = (
      <div className="alert alert-danger" role="alert">
        {error}
      </div>
    );
  } else if (success) {
    statusContent = (
      <div className="alert alert-success" role="alert">
        Restaurant {id ? "updated" : "added"} successfully!
      </div>
    );
  }

  return (
    <main>
      <section className="container py-3">
        <h2 className="fs-1 py-4">{id ? "Update" : "Add"} Restaurant</h2>
        {statusContent}
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">
              Name
            </label>
            <input
              type="text"
              id="name"
              className="form-control"
              value={formData["name"] || ""}
              onChange={handleFormChange}
              required
              placeholder="Enter a restaurant name"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="cuisine" className="form-label">
              Cuisine
            </label>
            <input
              type="text"
              id="cuisine"
              className="form-control"
              value={formData["cuisine"] || ""}
              onChange={handleFormChange}
              required
              placeholder="Enter a cuisine"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="address" className="form-label">
              Address
            </label>
            <input
              type="text"
              id="address"
              className="form-control"
              value={formData["address"] || ""}
              onChange={handleFormChange}
              required
              placeholder="Enter address"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="city" className="form-label">
              City
            </label>
            <input
              type="text"
              id="city"
              className="form-control"
              value={[formData["city"]] || ""}
              onChange={handleFormChange}
              required
              placeholder="Enter city"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="rating" className="form-label">
              Rating
            </label>
            <input
              type="number"
              id="rating"
              className="form-control"
              value={formData["rating"] || ""}
              onChange={handleFormChange}
              required
              placeholder="Enter rating"
            />
          </div>
          <button className="btn btn-primary" disabled={isLoading}>
            {id ? "Update" : "Add Restaurant"}
          </button>
        </form>
      </section>
    </main>
  );
}
export default AddRestaurant;
