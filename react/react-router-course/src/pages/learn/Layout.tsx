import { Outlet } from "react-router";
import NavBar from "../../components/NavBar";
import LearnAside from "../../components/LearnAside";

interface IProps {}

const Layout = ({}: IProps) => {
  return (
    <>
      <NavBar />
      <LearnAside />
      <Outlet />
    </>
  );
};

export default Layout;
