import { IUser } from "../interfaces";

interface IProps {
  user: IUser;
}

const UserDetails = ({ user }: IProps) => {
  return (
    <div>
      <h1>User Details</h1>
      <p>Email: {user.email}</p>
      <p>Password: {user.pass}</p>
    </div>
  );
};

export default UserDetails;
