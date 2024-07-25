import { Link } from "react-router-dom";
function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand " href="#">
            <h2 className="text-danger fs-30 fw-bold">
              Egy<span className="text-primary">Best</span>
            </h2>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav ms-auto">
              <Link className="nav-link active" aria-current="page" to={"/"}>
                Home
              </Link>
              <a className="nav-link" href="#">
                Features
              </a>
              <a className="nav-link" href="#">
                Pricing
              </a>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
export default Navbar;
