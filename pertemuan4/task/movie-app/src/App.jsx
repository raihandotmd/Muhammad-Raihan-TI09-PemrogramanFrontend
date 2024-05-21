import "./index.css";
import Layout from "./layout";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import TopRatedMovie from "./pages/movie/TopRated";
import NowPlayingMovie from "./pages/movie/NowPlaying";
import CreateMovie from "./pages/movie/Create";
import PopularMovie from "./pages/movie/Popular";

// creating app component
function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/movie/create" element={<CreateMovie />}></Route>
        <Route path="/movie/popular" element={<PopularMovie />}></Route>
        <Route path="/movie/now" element={<NowPlayingMovie />}></Route>
        <Route path="/movie/top" element={<TopRatedMovie />}></Route>
      </Routes>
    </Layout>
  );
}

export default App;
