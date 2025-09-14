import { Link } from "react-router";

interface IProps {}

const NavBar = ({}: IProps) => {
  return (
    <nav className="bg-gray-800">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
