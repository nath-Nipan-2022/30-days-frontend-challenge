import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="z-3 position-sticky top-0 ">
      <nav className="navbar navbar-expand-lg bg-body-tertiary px-2">
        <div className="container-fluid d-flex align-items-center justify-content-between">
          <Link className="navbar-brand">BistroPal</Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse justify-content-end"
            id="navbarNav"
          >
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link" to="/restaurants">
                  Restaurant List
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/add-restaurant">
                  Add Restaurant
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">
                  About Us
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
export default Navbar;
