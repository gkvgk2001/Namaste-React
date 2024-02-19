import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Menu_Api_URL } from "../utils/constant";
import { Banner_URL } from "../utils/constant";
import { useParams } from "react-router-dom";

const Banner = () => {
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
    restInfo?.cards[0]?.card?.card?.info;

  const { carousel, title } =
    restInfo?.cards[2].groupedCard.cardGroupMap.REGULAR.cards[1].card.card;

  console.log(carousel);
  console.log(title);

  return (
    <div className="bannersection">
      <h2>{title}</h2>
      {carousel.map((banners) => (
        <div key={banners?.dish?.info?.id} className="BannerImages">
          <div className="bannerimg">
            <img
              src={Banner_URL + banners?.dish?.info?.imageId}
              alt="Restaurant-Logo"
              height={"200px"}
            />
          </div>

          <h4 className="bannerabvinfo">{banners?.dish?.info?.name}</h4>
          <p className="bannerabvprice">
            ₹
            {banners.dish.info.price / 100 ||
              banners.dish.info.defaultPrice / 100}
          </p>
        </div>
      ))}
    </div>
  );
};

export default Banner;
