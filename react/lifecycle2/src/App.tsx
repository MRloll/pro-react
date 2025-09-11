// import HomePage from "./pages/HomePage";
// import { useState } from "react";
import "./App.css";
import HooksPage from "./pages/HooksPage";

function App() {
  // const [showPage, setPage] = useState(true);

  return (
    <>
      {/* <button onClick={() => setPage(!showPage)}>toggle</button>
      {showPage && <HomePage />} */}
      <HooksPage />
    </>
  );
}

export default App;
