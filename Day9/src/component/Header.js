import { LOGO_URL } from "../utils/constant";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import useOnlinestatus from "../utils/useOnlinestatus";

const Header = () => {
  const [btnname, setbtnname] = useState("Login");
  //proof of rendering the whole component
  console.log("header", "rendered");

  // 1 if depenedency array is not passed it will render everytime the component rendered
  // useEffect(() => {
  //   console.log("use effect rendered");
  // });

  // 2nd conditon if depency is thre with [] it will call only at intial
  // useEffect(() => {
  //   console.log("use effect rendered");
  // }, []);
  // 03nd conditon if depency is thre with something inside in it [btnname] it will call only whenever iside lement changes
  useEffect(() => {
    console.log("use effect rendered");
  }, [btnname]);

  const onlineStatus = useOnlinestatus();

  return (
    <div className="header">
      <div className="Logo-container">
        <img className="logo" src={LOGO_URL} alt="logo" />
      </div>

      <div className="nav-items">
        <ul>
          <li>Online Status:{onlineStatus ? "✅" : "🛑"}</li>
          <li>
            <Link to={"/"}> Home</Link>
          </li>
          <li>
            <Link to={"/about"}> About Us</Link>
          </li>
          <li>
            <Link to={"/contact"}> Contact Us</Link>
          </li>
          <li>
            <Link to={"/grocery"}> Grocery</Link>
          </li>
          <li>Cart</li>
          <li>
            <button
              class="log"
              onClick={() => {
                if (btnname === "Login") {
                  setbtnname("Logout");
                } else {
                  setbtnname("Login");
                }
              }}
            >
              {btnname}
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
