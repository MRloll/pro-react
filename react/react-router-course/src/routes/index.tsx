import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router";
import NavBar from "../components/NavBar";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      {/* <NavBar /> */}
      <Route element={<NavBar />} path="/">
        <Route element={<h3>walid</h3>} path="/" />
        <Route element={<h3>contact</h3>} path="/contact" />
      </Route>
    </>
  )
);

export default router;
