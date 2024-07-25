import { useState, useEffect } from "react";
import { useParams } from "react-router";
function MovieDetails() {
  const params = useParams();

  const api_url = `https://api.themoviedb.org/3/movie/${params.movieId}?api_key=5b6d2f21c07b6b480b047d8a71c3824d`;
  const [movie, setMovie] = useState([]);
  useEffect(() => {
    fetch(api_url)
      .then((res) => res.json())
      .then((data) => setMovie(data));
  }, []);
  return (
    <>
      <div className="bg-dark p-5">
        <div className="card m-auto mb-1 mt-4" style={{ maxWidth: "900px" }}>
          <div className="row g-0">
            <div className="col-md-4">
              <img
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                className="img-fluid rounded-start"
                alt="..."
              />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h3 className="card-title text-danger">{movie.title}</h3>
                <p className="card-text">{movie.overview}</p>
                <p className="card-text">release_date: {movie.release_date}</p>
                <p className="card-text">popularity: {movie.popularity}</p>
                <p className="card-text">
                  original_language: {movie.original_language}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default MovieDetails;
