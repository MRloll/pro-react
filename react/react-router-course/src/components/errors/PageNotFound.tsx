import { Link } from "react-router";

interface IProps {}

const PageNotFound = ({}: IProps) => {
  return (
    <>
      <div>PageNotFound</div>
      <Link to={"/"} reloadDocument>
        Home
      </Link>
    </>
  );
};

export default PageNotFound;
