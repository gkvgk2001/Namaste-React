import { useEffect, useState } from "react";
import { Menu_Api_URL } from "./constant";

const usestateRestaurantMenu = (resId) => {
  const [restInfo, setrestInfo] = useState(null);

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(Menu_Api_URL + resId);

    const resp = await data.json();

    setrestInfo(resp.data);
  };

  return restInfo;
};

export default usestateRestaurantMenu;
