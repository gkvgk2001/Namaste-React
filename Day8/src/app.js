import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./component/Header";
import Body from "./component/Body";
import About from "./component/About";
import Contact from "./component/Contact";
import Error from "./component/Error";
import RestaurantMenu from "./component/Restaurantmenu";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
//Header Component

//to use inline css we use object method

// const stylefol = {
//   backgroundColor: "yellow",
// };
// style = { stylefol }; in commponent

const AppLayout = () => {
  return (
    <div className="app">
      <Header />

      <Outlet />
    </div>
  );
};
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/restaurants/:resId",
        element: <RestaurantMenu />,
      },
    ],
    errorElement: <Error />,
  },

  // {
  //   path: "/about",
  //   element: <About />,
  // },
  // {
  //   path: "/contact",
  //   element: <Contact />,
  // },
]);

const root = ReactDOM.createRoot(document.querySelector(".root"));

root.render(<RouterProvider router={appRouter} />);
