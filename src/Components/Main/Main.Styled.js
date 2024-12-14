import styled from "styled-components";

export const MainStyled = styled.main`
  padding: 2rem;
  background-color: ${(props) => props.theme.color.white};
  color: ${(props) => props.theme.color.black};

  grid-area: main;

  h1 {
    font-size: 2rem;
    margin-bottom: 1rem;
  }

  p {
    font-size: 1rem;
    line-height: 1.5;
    margin-bottom: 1rem;
  }
`;
