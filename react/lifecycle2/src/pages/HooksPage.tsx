import { useEffect, useState } from "react";

interface IProps {}

const HooksPage = ({}: IProps) => {
  const [counter, setCounter] = useState(0);
  useEffect(() => {
    console.log("sssssssss");
  }, []);
  return (
    <>
      <p>{counter}</p>
      <div>HooksPage</div>
      <button onClick={() => setCounter((prev) => prev + 1)}>Increment</button>
    </>
  );
};

export default HooksPage;
