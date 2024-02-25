import Jesicho from "../component/Jesicho";

import usestateRestaurantMenu from "./usestateRestaurantMenu";

const usestateBanner = (resId) => {
  const restInfo = usestateRestaurantMenu(resId);

  try {
    return restInfo;
  } catch (error) {
    console.log(Error, "Oops error is loaded");

    return <Jesicho />;
  }
};

export default usestateBanner;
