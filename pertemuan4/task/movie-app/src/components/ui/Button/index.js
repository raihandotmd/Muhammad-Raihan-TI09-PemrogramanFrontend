import styled from "styled-components";

const Button = styled.button`
  font-size: ${(props) => props.theme.buttonSizes[props.size || "md"].fontSize};
  padding: ${(props) => props.theme.buttonSizes[props.size || "md"].padding};

  border: none;
  border-radius: 10px;
  color: ${({ theme }) => theme.colors.white};

  text-decoration: none;

  background-color: ${(props) =>
    props.theme.colors[props.variant || "primary"]};
`;

export default Button;
