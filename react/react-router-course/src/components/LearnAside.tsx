import { NavLink } from "react-router";

interface IProps {}

const LearnAside = ({}: IProps) => {
  return (
    <div>
      <aside>
        <nav className=" my-7">
          <ul className="flex flex-col items-start justify-between gap-3">
            <li className="hover:text-amber-300 duration-200">
              <NavLink end to="/learn">
                Quick Start
              </NavLink>
            </li>
            <li className="hover:text-amber-300 duration-200">
              <NavLink to="/learn/thinking-in-react">thinking-in-react</NavLink>
            </li>
            <li className="hover:text-amber-300 duration-200">
              <NavLink to="/learn/installation">installation</NavLink>
            </li>
          </ul>
        </nav>
      </aside>
    </div>
  );
};

export default LearnAside;
