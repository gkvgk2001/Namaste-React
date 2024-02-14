import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./component/Header";
import Body from "./component/Body";
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

      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.querySelector(".root"));

root.render(<AppLayout />);
