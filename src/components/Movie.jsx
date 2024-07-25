import { Link } from "react-router-dom";

function Movie(props) {
  const { movie } = props;

  return (
    <>
      <div className="card bg-dark text-light mb-3" style={{ width: "17rem" }}>
        <img
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          className="card-img-top"
          alt="..."
        />
        <div className="card-body">
          <h6 className="card-title fw-bold text-danger">{movie.title}</h6>
          <p className="card-text">{movie.overview.slice(0, 80)}</p>
          <Link
            href="#"
            className="btn btn-outline-light"
            to={`/movie/${movie.id}`}
          >
            details
          </Link>
        </div>
      </div>
    </>
  );
}

export default Movie;
