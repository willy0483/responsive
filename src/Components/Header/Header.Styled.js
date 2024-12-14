import styled from "styled-components";

export const HeaderStyled = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem 2rem;
  background-color: ${(props) => props.theme.color.primary};
  color: ${(props) => props.theme.color.white};
  grid-area: header;

  .logo {
    font-size: 1.5rem;
    font-weight: bold;
  }
`;
