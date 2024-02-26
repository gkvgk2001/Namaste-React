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
    <div className="Restaurant-card   m-4 h-auto px-2 py-2 w-[250px] rounded-lg bg-slate-200 ">
      <img
        className="res-logo rounded-lg block ml-auto mr-auto "
        src={CDN_URL + cloudinaryImageId}
        alt="Restaurant-Logo"
      />
      <h3 className=" font-bold text-black-200 text-lg py-3">{name}</h3>
      <h4>{cuisines.join(" ,").slice(0, 26) + "..."}</h4>
      <h4>{avgRating}</h4>
      <h4>{costForTwo}</h4>
      <h4>{resData?.info?.sla?.slaString}</h4>
    </div>
  );
};

export default Rescard;
