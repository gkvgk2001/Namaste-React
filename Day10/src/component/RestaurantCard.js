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
    <div className="Restaurant-card sm:gap-8   m-4 h-82 px-2 py-2  w-36 sm:h-auto sm:w-72 sm:px-2  rounded-lg bg-slate-200  hover:bg-green-300 ">
      <img
        className="res-logo rounded-lg  object-cover "
        src={CDN_URL + cloudinaryImageId}
        alt="Restaurant-Logo"
      />
      <h3 className="inline font-bold text-black-200 text-lg py-3">
        {name.length > 20 ? name.slice(0, 20) + "..." : name}
      </h3>
      <h4>{cuisines.join(" ,").slice(0, 20) + "..."}</h4>
      <h4>{avgRating}</h4>
      <h4>{costForTwo}</h4>
      <h4>{resData?.info?.sla?.slaString}</h4>
    </div>
  );
};

export default Rescard;
