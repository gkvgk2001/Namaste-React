import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Menu_Api_URL } from "../utils/constant";
import { MENU_Image_URL } from "../utils/constant";
import { useParams } from "react-router-dom";
import Banner from "./Banner";

const RestaurantMenu = () => {
  const [restInfo, setrestInfo] = useState(null);
  const { resId } = useParams();
  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(Menu_Api_URL + resId);

    const resp = await data.json();
    console.log(resp.data);
    setrestInfo(resp.data);
  };
  if (restInfo === null) {
    return <Shimmer />;
  }

  const { name, costForTwoMessage, cuisines } =
    restInfo?.cards[2]?.card?.card?.info;

  //card0

  const { itemCards, title } =
    restInfo?.cards[4].groupedCard.cardGroupMap.REGULAR.cards[2].card.card;
  // card2

  console.log(itemCards);

  return (
    <div className="menu">
      <div className="menuheader">
        <h1>{name}</h1>

        <div>
          <p>
            {cuisines.join(" , ")} : {costForTwoMessage}
          </p>
        </div>
      </div>

      <div>
        <Banner />
      </div>

      <div className="menubody">
        <h2> {title}:</h2>
        {itemCards.map((item) => (
          <div key={item?.card?.info?.id} className="top">
            <div className="Maincontainer">
              <div className="leftrecom">
                <h4>{item?.card?.info?.name}</h4>
                <div className="price">
                  <p>
                    ₹
                    {item?.card?.info?.price / 100 ||
                      item?.card?.info?.defaultPrice / 100}
                  </p>
                </div>
                <div className="description">
                  <p>{item?.card.info.description} </p>
                </div>
              </div>
              <div className="rightrecom">
                <div className="images">
                  <img
                    className="menuitem-logo"
                    src={MENU_Image_URL + item?.card.info.imageId}
                    alt="Restaurant-Logo"
                    height={"100px"}
                  />
                </div>
              </div>
            </div>
            <hr />
          </div>
        ))}
      </div>
    </div>
  );
};
export default RestaurantMenu;
