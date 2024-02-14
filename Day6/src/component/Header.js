import { LOGO_URL } from "../utils/constant";
import { useState } from "react";

const Header = () => {
  const [btnname, setbtnname] = useState("Login");
  //proof of rendering the whole component
  console.log("header", "rendered");
  return (
    <div className="header">
      <div className="Logo-container">
        <img className="logo" src={LOGO_URL} alt="logo" />
      </div>

      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
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
