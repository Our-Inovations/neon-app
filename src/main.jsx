import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import Header from "./components/layout/header/Header";
import Footer from "./components/layout/footer";
import { Provider } from "react-redux";
import store from "../store/store";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Collections from "./collections";
import ErrorPage from "./errorPage";
import Collection from "./collection";
import ContactUs from "./contactPage";
import { Outlet } from "react-router-dom";
import CustormDesign from "./customDesign";
import DesignProff from "./designProff";
import CheckOutWithId from "./checkOut";
import AddedToCart from "./components/cartUpdate";
import About from "./about";
import Faq from "./faq"
import PrivacyPolicy  from "./privacyPolicy"
import TermsAndCondition from "./termsAndCondition"
import RetrunPolicy from "./returnPolicy";
import ScrollToTopOnMount from "./components/scrolltoTop";

const router = createBrowserRouter([
  {
    path: "/",
    element: <NavbarWrapper />,
    children: [
      { path: "/", element: <App />, errorElement: <ErrorPage /> },
      {
        path: "/collections",
        element: <Collections />,
      },
      {
        path: "collections/:collectionId",
        element: <Collection />,
      },
      { path: "/contact", element: <ContactUs /> },
      { path: "custom-design", element: <CustormDesign /> },
      { path: "/design-proff", element: <DesignProff /> },
      { path: "/checkout", element: <CheckOutWithId /> },
      { path: "/about-us", element: <About /> },
      { path: "/faq", element: <Faq /> },
      { path: "/privacy-policy", element: <PrivacyPolicy /> },
      { path: "/terms-and-condition", element: <TermsAndCondition /> },
      { path: "/retrun-policy", element: <RetrunPolicy /> },
    ],
  },
]);

function NavbarWrapper() {
  return (
    <div>
      <Header />
      <AddedToCart />
      <Outlet />
      <Footer />
    </div>
  );
}
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router}></RouterProvider>
    </Provider>
  </React.StrictMode>
);
