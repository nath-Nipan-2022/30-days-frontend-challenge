import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="p-5" style={{ backgroundColor: "#e9ecef" }}>
      <div className="pb-2 border-bottom border-secondary d-flex align-items-center justify-content-center flex-column text-center border-opacity-10">
        <h1 className="pt-3 fw-light display-1">Welcome to BistroPal</h1>
        <p className="fw-lighter fs-5">
          Elevate your restaurant&apos;s performance with our efficient
          restaurant management system.
        </p>
      </div>

      <p className="pt-4 text-center">
        Explore the features using the navigation links above and experience
        streamlined restaurant management.
      </p>

      <div className="mt-4 d-flex justify-content-center">
        <Link to="/restaurants" className="btn btn-primary">
          Explore Now
        </Link>
      </div>
    </div>
  );
}
export default Header;
