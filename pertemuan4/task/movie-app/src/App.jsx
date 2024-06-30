import "./index.css";
import Layout from "./layout";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import TopRatedMovie from "./pages/movie/TopRated";
import NowPlayingMovie from "./pages/movie/NowPlaying";
import CreateMovie from "./pages/movie/Create";
import PopularMovie from "./pages/movie/Popular";
import theme from "./utils/constants/themes";
import { ThemeProvider } from "styled-components";
import MovieDetailPage from "./pages/movie/Detail";
import data from "./utils/constants/data";
import MoviesContext from "./context/MoviesContext";
import { useState } from "react";

// creating app component
function App() {
  const [movies, setMovies] = useState(data);
  const contextValue = {
    movies,
    setMovies,
  };
  return (
    <>
      <ThemeProvider theme={theme}>
        <MoviesContext.Provider value={contextValue}>
          <Layout>
            <Routes>
              <Route path="/" element={<Home />}></Route>
              <Route path="/movie/create" element={<CreateMovie />}></Route>
              <Route path="/movie/popular" element={<PopularMovie />}></Route>
              <Route path="/movie/now" element={<NowPlayingMovie />}></Route>
              <Route path="/movie/top" element={<TopRatedMovie />}></Route>
              <Route path="/movie/:id" element={<MovieDetailPage />}></Route>
            </Routes>
          </Layout>
        </MoviesContext.Provider>
      </ThemeProvider>
    </>
  );
}

export default App;
