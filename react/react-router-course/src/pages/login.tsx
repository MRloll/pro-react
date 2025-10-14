import { useLocation } from "react-router";

interface IProps {}

const login = ({}: IProps) => {
  const location = useLocation();
  console.log(location);
  return (
    <div>
      <h1>login form</h1>
      <form action="" className="flex flex-col gap-1.5">
        <input
          type="text"
          name="email"
          id="email"
          className="border"
          placeholder="email"
        />
        <input
          type="text"
          name="password"
          id="password"
          className="border"
          placeholder="password"
        />
      </form>
    </div>
  );
};

export default login;
