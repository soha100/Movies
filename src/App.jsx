import Navbar from "./components/Navbar";
import Movies from "./components/Movies";
import Slider from "./components/Slider";
import { Route, Routes } from "react-router";
import MovieDetails from "./components/MovieDetails";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        {/* <Route path="" element={<Slider />}></Route> */}
        <Route path="/" element={<Movies />}></Route>
        <Route path="movie/:movieId" element={<MovieDetails />} />
      </Routes>
    </>
  );
}
export default App;
