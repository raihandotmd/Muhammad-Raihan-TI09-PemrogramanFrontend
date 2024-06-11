import { useState } from "react";
import { Link } from "react-router-dom";
import StyledNavbar from "./StyledNavbar";

const Navbar = () => {
  const [navToggle, setNavToggle] = useState(true);
  function handleClick() {
    setNavToggle(!navToggle);
  }
  return (
    <StyledNavbar>
      <nav>
        <div className="navbar__main">
          <h2>Movie App</h2>
          <div className="navbar__toggle">
            <button onClick={handleClick}>X</button>
          </div>
        </div>
        <ul className={`navbar__list ${navToggle ? "navbar__list_show" : ""}`}>
          <li className="navbar__item">
            <Link to="/">Home</Link>
          </li>
          <li className="navbar__item">
            <Link to="/movie/create">Add Movie</Link>
          </li>
          <li className="navbar__item">
            <Link to="/movie/popular">Popular</Link>
          </li>
          <li className="navbar__item">
            <Link to="/movie/now">Now Playing</Link>
          </li>
          <li className="navbar__item">
            <Link to="/movie/top">Top Rated</Link>
          </li>
        </ul>
      </nav>
    </StyledNavbar>
  );
};

export default Navbar;
