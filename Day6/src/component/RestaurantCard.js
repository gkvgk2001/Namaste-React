import { CDN_URL } from "../utils/constant";

const Rescard = (props) => {
  const { resData } = props;

  const {
    name,
    cuisines,
    cloudinaryImageId,
    costForTwo,
    deliveryTime,
    avgRating,
  } = resData?.info;
  return (
    <div className="Restaurant-card">
      <img
        className="res-logo"
        src={CDN_URL + cloudinaryImageId}
        alt="Restaurant-Logo"
      />
      <h3>{name}</h3>
      <h4>{cuisines.join(" ,").slice(0, 26) + "..."}</h4>
      <h4>{avgRating}</h4>
      <h4>{costForTwo}</h4>
      <h4>{resData?.info?.sla?.slaString}</h4>
    </div>
  );
};

export default Rescard;
