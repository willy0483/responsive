import { HeaderStyled } from "./Header.Styled";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <HeaderStyled>
      <Link to={"/"}>
      <div className="logo">MyLogo</div>
      </Link>
    </HeaderStyled>
  );
};
