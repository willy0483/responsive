import styled from "styled-components";

export const MainStyled = styled.main`
  padding: 2rem;
  background-color: ${(props) => props.theme.color.background};
  color: ${(props) => props.theme.color.text};

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
