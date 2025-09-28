import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router";
import HomePage from "../pages";
import AboutPage from "../pages/About";
import ContactPage from "../pages/Contact";
import RootLayout from "../pages/Layout";
import QuickStartPage from "../pages/learn";
import Layout from "../pages/learn/Layout";
import ThinkingInReact from "../pages/learn/ThinkingInReact";
import Installation from "../pages/learn/Installation";
import Login from "../pages/login";
import ProtectedRotue from "../components/auth/ProtectedRotue";
import ErrorRouteHandler from "../components/errors/ErrorRouteHandler";
import PageNotFound from "../components/errors/PageNotFound";

const isLoggedIn = true;
const userData: { email: string } | null = isLoggedIn
  ? { email: "walid@gmail.com" }
  : null;

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route
        element={<RootLayout />}
        path="/"
        errorElement={<ErrorRouteHandler />}
      >
        <Route index element={<HomePage />} />
        <Route path="about" element={<AboutPage />} />
        <Route
          path="contact"
          element={
            <ProtectedRotue
              isAllowed={isLoggedIn}
              path="/login"
              data={userData}
            >
              <ContactPage />
            </ProtectedRotue>
          }
        />
        <Route
          path="login"
          element={
            <ProtectedRotue
              isAllowed={!isLoggedIn}
              path="/contact"
              data={userData}
            >
              <Login />
            </ProtectedRotue>
          }
        />
      </Route>

      <Route element={<Layout />} path="/learn">
        <Route index element={<QuickStartPage />} />
        <Route path="thinking-in-react" element={<ThinkingInReact />} />
        <Route path="installation" element={<Installation />} />
      </Route>

      {/* page not fount */}
      <Route path="*" element={<PageNotFound />} />
    </>
  )
);

export default router;
