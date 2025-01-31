import React, { lazy, Suspense, useState } from "react"; // core package
import ReactDOM from "react-dom/client"; // packege which is importing dom
// Default Import
import Header from "../components/Header";
import Body from "../components/Body";
import Footer from "../components/Footer";
import Error from "../components/Error";
import Contact from "../components/Contact";
import Profile from "../components/Profile";
import RestauRentMenu from "../components/RestaurentMenu";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Cart from "../components/Cart";
import ShimmerUi from "../components/ShimmerUi";
import UserContext from "../utils/userContext";
import { Provider } from "react-redux";
import store from "../utils/store";

const InstaMart = lazy(() => import("../components/InstaMart")); // onDemand Loading / lazy loading

const About = lazy(() => import("../components/About"))

const AppLayOut = () => {
  const [user, setUser] = useState({
    name: "shubham Singh",
    email: "shubhmasingh8199@gmail.com"
  })

  return (
    <Provider store={store}>
      <UserContext.Provider
      value={{
        user: user,
        setUser:setUser
      }}>
      <Header/>
      <Outlet />
      <Footer />
    </UserContext.Provider>
    </Provider>
    
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayOut />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <Suspense fallback={<h1>Loading...</h1>}>
          <About />
        </Suspense>,
        children: [
          {
            path: "profile", // parentPath/{path} => localhost:1234/about/profile
            element: <Profile />,
          },
        ],
      },
      {
        path: "/contact",
        element: <Contact />,
      },
    
      {
        path: "/restaurent/:id",
        element: <RestauRentMenu />,
      },
      {
        path: "/instaMart",
        element: <Suspense fallback={<ShimmerUi />}>
          <InstaMart />
        </Suspense>,
      },
      {
        path: "/cart",
        element: <Cart />,
      },

    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
