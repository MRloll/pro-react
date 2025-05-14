import { ChangeEvent, useState } from "react";
import type { IUser } from "../interfaces";
import { formInput } from "../data";

interface IProps {
  setIsLogged: (text: boolean) => void;
  user: IUser;
  setUser: (user: IUser) => void;
}

const LoginForm = ({ setIsLogged, user, setUser }: IProps) => {
  const [formInputArr, setInputArr] = useState(formInput);
  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;
    console.log(value, name);
    setUser({
      ...user,
      [name]: value,
    });
  };

  const renderFormInputList = formInputArr.map((input, index) => (
    <div key={input.name}>
      <label htmlFor={input.name}>{input.label}</label>
      <input
        type={input.type}
        name={input.name}
        id={input.id}
        value={user[input.name]}
        onChange={onChangeHandler}
      />
      <button
        onClick={(e) => {
          const filterd = formInputArr.filter(
            (item) => item.name !== input.name
          );
          setInputArr(filterd);
          e.preventDefault();
        }}
      >
        x
      </button>
    </div>
  ));

  return (
    <form>
      {renderFormInputList}
      <button type="submit" onClick={() => setIsLogged(true)}>
        login
      </button>
    </form>
  );
};
export default LoginForm;
