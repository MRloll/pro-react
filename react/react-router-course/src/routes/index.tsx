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

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route element={<RootLayout />} path="/">
        <Route index element={<HomePage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="contact" element={<ContactPage />} />
      </Route>

      <Route element={<Layout />} path="/learn">
        <Route index element={<QuickStartPage />} />
        <Route path="thinking-in-react" element={<ThinkingInReact />} />
        <Route path="installation" element={<Installation />} />
      </Route>
    </>
  )
);

export default router;
