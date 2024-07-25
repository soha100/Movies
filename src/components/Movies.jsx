import { useState } from "react";
import { useEffect } from "react";
import Movie from "./Movie";

function Products() {
  const apiUrl =
    "https://api.themoviedb.org/3/trending/movie/week?language=en-US&api_key=5b6d2f21c07b6b480b047d8a71c3824d";
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch(apiUrl)
      .then((res) => res.json())
      .then((data) => setMovies(data.results));
  }, []);
  return (
    <>
      <div style={{ backgroundColor: "#000c" }}>
        <h1 className="text-center p-5 text-light fw-bold">Movies List</h1>
        <div className="d-flex flex-wrap gap-3 p-2 justify-content-center">
          {movies.map((movie) => {
            return (
              <>
                <div>
                  <Movie movie={movie} key={movie.id} />
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
}
export default Products;
