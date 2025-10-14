import { NavLink } from "react-router";

interface IProps {}

const NavBar = ({}: IProps) => {
  return (
    <nav className="bg-gray-800">
      <ul className="flex gap-6 justify-center ">
        <li>
          <NavLink className="hover:text-teal-400" to="/">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink className="hover:text-teal-400" to="/about">
            About
          </NavLink>
        </li>
        <li>
          <NavLink className="hover:text-teal-400" to="/contact">
            Contact
          </NavLink>
        </li>
        <li>
          <NavLink className="hover:text-teal-400" to="/learn">
            learn
          </NavLink>
        </li>
        <li>
          <NavLink className="hover:text-teal-400" to="/login">
            login
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
