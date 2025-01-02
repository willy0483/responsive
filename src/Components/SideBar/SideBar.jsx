import { SideBarStyle } from "./SideBar.styled";
import { Link } from "react-router-dom";

export const SideBar = () => {
  return (
    <SideBarStyle>
      <h3>Side Navigation</h3>
      <ul>
        <li>
          <Link to={"/Dashboard"}>Dashboard</Link>
        </li>
        <li>
        <Link to={"/Profile"}>Profile</Link>
        </li>
        <li>
        <Link to={"/Settings"}>Settings</Link>
        </li>
        <li>
        <Link to={"/Logout"}>Logout</Link>
        </li>
      </ul>
    </SideBarStyle>
  );
};
