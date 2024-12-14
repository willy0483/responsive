import styled from "styled-components";

export const GridStyled = styled.div`
  & > * {
    border: 1px solid #000;
  }
  display: grid;
  height: 100vh;
  background-color: #f00;

  grid-template-columns: ${(props) => props.theme.grid.mobile.primary.columns};
  grid-template-rows: ${(props) => props.theme.grid.mobile.primary.rows};
  grid-template-areas: ${(props) => props.theme.grid.mobile.primary.areas};

  @media screen and (min-width: ${(props) => props.theme.grid.breakpoints.m}) {
    background-color: #0f0;
    grid-template-columns: ${(props) =>
      props.theme.grid.tablet.primary.columns};
    grid-template-rows: ${(props) => props.theme.grid.tablet.primary.rows};
    grid-template-areas: ${(props) => props.theme.grid.tablet.primary.areas};
  }

  @media screen and (min-width: ${(props) => props.theme.grid.breakpoints.l}) {
    background-color: #00f;
    grid-template-columns: ${(props) =>
      props.theme.grid.desktop.primary.columns};
    grid-template-rows: ${(props) => props.theme.grid.desktop.primary.rows};
    grid-template-areas: ${(props) => props.theme.grid.desktop.primary.areas};
  }
`;
