import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Menu_Api_URL } from "../utils/constant";
import { Banner_URL } from "../utils/constant";
import { useParams } from "react-router-dom";

import Jesicho from "./Jesicho";

const Banner = () => {
  const [restInfos, setrestInfos] = useState(null);
  const { resId } = useParams();
  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    try {
      const data = await fetch(Menu_Api_URL + resId);

      const resp = await data.json();
      console.log(resp.data);
      setrestInfos(resp.data);
    } catch (error) {
      console.log(Error, "Oops error is loaded");

      return <Jesicho />;
    }
  };
  if (restInfos === null) {
    return <Shimmer />;
  }

  try {
    const { carousel, title } =
      restInfos?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card
        ?.card;

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
  } catch (error) {
    console.log(Error, "errror aaya hai load nhi hua");
    return <Jesicho />;
  }

  // cards[4].groupedCard.cardGroupMap.REGULAR.cards[1].card.card;
};

export default Banner;
