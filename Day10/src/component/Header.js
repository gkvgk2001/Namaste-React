import { LOGO_URL } from "../utils/constant";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import useOnlinestatus from "../utils/useOnlinestatus";

const Header = () => {
  const [btnname, setbtnname] = useState("Login");
  //proof of rendering the whole component
  console.log("header", "rendered");

  useEffect(() => {
    console.log("use effect rendered");
  }, [btnname]);

  const onlineStatus = useOnlinestatus();

  return (
    <div className="relative">
      <div className="header , flex , justify-between bg-green-300 shadow-lg  mb-2 px-2 sm:bg-pink-300 ">
        <div className="Logo-container">
          <img className="logo w-32 " src={LOGO_URL} alt="logo" />
        </div>

        <div className="nav-items flex items-center">
          <ul className="flex , p-4 , m-4 gap-4 font-medium text-lg ">
            <li className="ml-10">
              Online Status:{onlineStatus ? "✅" : "🛑"}
            </li>
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
    </div>
  );
};

export default Header;
