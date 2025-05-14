import "./index.scss";
interface IProps {}
const Alert = ({}: IProps) => {
  return (
    <div className="alert-wrapper" role="alert">
      <strong className="font-bold">Info!</strong>
      <span className="block sm:inline">This is a simple alert message.</span>
    </div>
  );
};

export default Alert;
