import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

import { Banner_URL } from "../utils/constant";
import { useParams } from "react-router-dom";
import usestateBanner from "../utils/usestateBanner";

import Jesicho from "./Jesicho";

const Banner = () => {
  const { resId } = useParams();

  const restInfos = usestateBanner(resId);

  if (restInfos === null) {
    return <Shimmer />;
  }
  console.log(
    restInfos?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card
      ?.card
  );

  try {
    const { carousel, title } =
      restInfos?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card
        ?.card;

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
                width={"200px"}
                className=" object-fill bg-no-repeat"
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
