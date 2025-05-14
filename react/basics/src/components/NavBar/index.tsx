import "./index.scss";
export const navItems = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Services", path: "/services" },
  { name: "Contact", path: "/contact" },
];

const style = {
  ul: {
    display: "flex",
    placeContent: "center",
    justifyContent: "space-around",
    listStyleType: "none",
    border: "1px solid",
    color: "black",
    padding: 10,
  },
};

interface IProps {
  companyName: string;
  isLogged: boolean;
  setIsLogged: (text: boolean) => void;
}

export function NavBar({
  companyName,
  isLogged,
  setIsLogged: setisLogged,
}: IProps) {
  return (
    <nav className="navbar">
      <ul className="navbar-list" style={style.ul}>
        <li className="navbar-item">{companyName}</li>
        {navItems.map((item) => (
          <li key={item.name} className="navbar-item">
            <a href={item.path} className="navbar-link">
              {item.name}
            </a>
          </li>
        ))}
        <li>
          <button onClick={() => setisLogged(!isLogged)}>
            {isLogged ? "Logout" : "Login"}
          </button>
        </li>
      </ul>
    </nav>
  );
}
