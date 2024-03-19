import Shimmer from "./Shimmer";
import { useContext, useState } from "react";
import { MENU_Image_URL } from "../utils/constant";
import { useParams } from "react-router-dom";
import Banner from "./Banner";
import usestateRestaurantMenu from "../utils/usestateRestaurantMenu";

import RestaurantCategory from "./RestaurantCategory";
import UserContext from "../utils/UserContext";

const RestaurantMenu = () => {
  const { resId } = useParams();

  const dummy = "dummy";
  const { loggedinUser } = useContext(UserContext);
  console.log(loggedinUser);

  const restInfo = usestateRestaurantMenu(resId);
  // const [showIndex, setshowIndex] = useState(null);
  const [showIndex, setShowIndex] = useState(null);

  if (restInfo === null) {
    return <Shimmer />;
  }

  const { name, costForTwoMessage, cuisines } =
    restInfo?.cards[0]?.card?.card?.info;

  //card2

  const { itemCards, title } =
    restInfo?.cards[2].groupedCard.cardGroupMap.REGULAR.cards[2].card.card;
  // card2

  console.log(restInfo?.cards[2].groupedCard.cardGroupMap.REGULAR.cards);

  const categories =
    restInfo?.cards[2].groupedCard.cardGroupMap.REGULAR.cards.filter(
      (cr) =>
        cr.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
  console.log(categories);

  return (
    <div className="menu text-center">
      <div className="menuheader">
        <h1 className="font-bold mt-10 my-5 text-2xl">{name}</h1>

        <div>
          <p className="text-xl font-medium text-gray-400">
            {cuisines.join(" , ")} : {costForTwoMessage}
          </p>
          <p>{loggedinUser}</p>
        </div>
      </div>

      <div className="menubody mt-5 ">
        {categories.map((category, index) => (
          <RestaurantCategory
            key={index}
            data={category?.card?.card}
            showItem={index === showIndex ? true : false}
            setShowIndex={() => setShowIndex(index)}
            dummy={dummy}
          />
        ))}
      </div>
    </div>
  );
};
export default RestaurantMenu;
