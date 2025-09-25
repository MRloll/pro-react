import { Outlet } from "react-router";
import NavBar from "../components/NavBar";

interface IProps {}

const RootLayout = ({}: IProps) => {
  return (
    <>
      <NavBar />
      <Outlet />
    </>
  );
};

export default RootLayout;
