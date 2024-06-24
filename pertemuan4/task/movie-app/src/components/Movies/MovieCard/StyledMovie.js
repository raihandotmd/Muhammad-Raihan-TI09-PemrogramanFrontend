import styled from "styled-components";

const StyledMovie = styled.div`
  margin-bottom: 1rem;

  a {
    text-decoration: none;
  }

  img {
    border-radius: 25px;
    max-width: 100%;
    height: auto;
    margin-bottom: 1rem;
    box-shadow: 6px 15px 21px 11px rgba(0, 0, 0, 0.1);
  }

  h3 {
    color: ${(props) => props.theme.colors.primary};
    font-size: 1.95rem;
    margin-bottom: 0.5rem;
  }

  p {
    color: ${(props) => props.theme.colors.textPrimary};
  }

  /* Medium Screen */
  @media screen and (min-width: 768px) {
    flex-basis: 50%;
  }

  /* Large Screen */
  @media screen and (min-width: 992px) {
    flex-basis: 25%;
    padding: 1rem;
  }
`;

export default StyledMovie;
