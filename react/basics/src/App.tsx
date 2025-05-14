import "./App.css";
import Heading from "./components/Heading";
import LoginForm from "./components/LoginForm";
import { NavBar } from "./components/NavBar";
import { useState } from "react";
import UserDetails from "./components/UserDetail";

function App() {
  const companyName = "My Company";
  const [isLogged, setIsLogged] = useState(false);
  const [user, setUser] = useState({ email: "", pass: "", username: "" });

  return (
    <>
      <NavBar
        setIsLogged={setIsLogged}
        isLogged={isLogged}
        companyName={companyName}
      ></NavBar>
      {isLogged ? (
        <>
          <Heading> Welcome to Our Website</Heading>
          <UserDetails user={user} />
        </>
      ) : (
        <LoginForm
          user={user}
          setUser={setUser}
          setIsLogged={setIsLogged}
        ></LoginForm>
      )}
    </>
  );
}

export default App;
