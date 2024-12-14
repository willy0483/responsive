import { MainStyled } from "./Main.Styled";

export const Main = ({ children }) => {
  return (
    <MainStyled>
      <h1>Main Content</h1>
      <p>This is the main content area. You can add your content here.</p>
      {children}
    </MainStyled>
  );
};
