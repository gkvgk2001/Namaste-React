import { LOGO_URL } from "../utils/constant";
import { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import useOnlinestatus from "../utils/useOnlinestatus";
import UserContext from "../utils/UserContext";

const Header = () => {
  const [btnname, setbtnname] = useState("Login");
  //proof of rendering the whole component
  console.log("header", "rendered");

  useEffect(() => {
    console.log("use effect rendered");
  }, [btnname]);

  const onlineStatus = useOnlinestatus();

  const { loggedinUser } = useContext(UserContext);

  const Cartitems = useSelector((store) => store.cart.items);
  console.log(Cartitems);

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
            <li className="px-4 font-bold text-xl">
              <Link to={"/Cart"}> Cart({Cartitems.length}items)</Link>
            </li>
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
            <li>{loggedinUser}</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
