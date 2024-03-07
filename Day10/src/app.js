import React, { lazy, Suspense, useEffect, useState, useContext } from "react";
import ReactDOM from "react-dom/client";
import Header from "./component/Header";
import Body from "./component/Body";
import About from "./component/About";
import Contact from "./component/Contact";
import Error from "./component/Error";
import RestaurantMenu from "./component/Restaurantmenu";
import UserContext from "./utils/UserContext";
// import Grocery from "./component/Grocery";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
//Header Component

//to use inline css we use object method

// const stylefol = {
//   backgroundColor: "yellow",
// };
// style = { stylefol }; in commponent

const Grocery = lazy(() => import("./component/Grocery"));
// const Grocery = lazy(() => import("./component/Grocery"));

const AppLayout = () => {
  const [userName, setUsername] = useState();

  useEffect(() => {
    //makinganapicall

    const user = {
      name: "Gaurav kumar",
    };
    setUsername(user.name);
  }, []);
  return (
    <UserContext.Provider value={{ loggedinUser: userName, setUsername }}>
      <div className="app">
        <Header />

        <Outlet />
      </div>
    </UserContext.Provider>
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
        path: "/grocery",
        element: (
          <Suspense fallback={<h1>Loading Screen .....</h1>}>
            <Grocery />
          </Suspense>
        ),
      },
      {
        path: "/restaurants/:resId",
        element: <RestaurantMenu />,
      },
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.querySelector(".root"));

root.render(<RouterProvider router={appRouter} />);

{
  /* <UserContext.Provider value={{ loggedinUser: userName }}>
  <div className="app">
    <UserContext.Provider value={{ loggedinUser: "Elon Musk" }}>
      <Header />
    </UserContext.Provider>

    <Outlet />
  </div>
</UserContext.Provider>; */
}
