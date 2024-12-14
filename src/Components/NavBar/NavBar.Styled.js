import styled from "styled-components";

export const NavbarStyled = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  background-color: ${(props) => props.theme.color.primary};
  color: ${(props) => props.theme.color.white};

  grid-area: navbar;

  ul {
    display: flex;
    list-style: none;
    gap: 1rem;

    li {
      a {
        color: ${(props) => props.theme.color.white};
        text-decoration: none;
        font-size: 1rem;

        &:hover {
          text-decoration: underline;
        }
      }
    }
  }
`;
