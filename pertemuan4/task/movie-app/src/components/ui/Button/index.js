import styled from "styled-components";

const Button = styled.button`
  padding: 0.8rem 2rem;
  border: none;
  border-radius: 10px;
  color: ${({ theme }) => theme.colors["white"]};

  background-color: ${(props) =>
    props.theme.colors[props.variant] || props.theme.colors["primary"]};
`;

export default Button;
