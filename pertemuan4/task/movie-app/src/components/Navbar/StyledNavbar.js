import styled from "styled-components";

const StyledNavbar = styled.div`
  background-color: #4361ee;
  padding: 2rem;
  color: #fff;

  /* Small Screen */
  nav {
    display: flex;
    flex-direction: column;
  }

  h2 {
    font-size: 2.4rem;
  }

  .navbar__list {
    display: none;
  }

  .navbar__item {
    margin-bottom: 1rem;
  }

  .navbar__item a {
    color: white;
    text-decoration: none;
  }

  .navbar__item a:hover {
    text-decoration: underline;
  }

  .navbar__main {
    display: flex;
    flex-direction: row;

    justify-content: space-between;
    align-items: center;

    margin-bottom: 1.5rem;
  }

  .navbar__toggle {
    display: inline-block;
  }

  .navbar__toggle button {
    background: none;
    border: 0;
    font-weight: bold;
    font-size: 2rem;
    cursor: pointer;
    color: white;
  }

  .navbar__toggle button:hover {
    color: black;
  }

  .navbar__list_show {
    display: flex;
    flex-direction: column;
    list-style: none;
  }

  /* Medium Screen */
  @media screen and (min-width: 768px) {
    nav {
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
    }

    .navbar__main {
      margin-bottom: 0;
    }

    .navbar__toggle {
      display: none;
    }

    .navbar__list {
      display: flex;
      flex-direction: row;
      list-style: none;
    }

    .navbar__item {
      margin: 0 1rem;
    }
  }
`;

export default StyledNavbar;
