import { useLocation } from "react-router";

interface IProps {}

const ContactPage = ({}: IProps) => {
  const location = useLocation();
  console.log(location);

  return <div>ContactPage {location.state?.email}</div>;
};

export default ContactPage;
