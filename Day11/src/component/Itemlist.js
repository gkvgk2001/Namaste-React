import React from "react";
import { MENU_Image_URL } from "../utils/constant";
const Itemlist = ({ data, data2 }) => {
  const itemlst = data;
  console.log(data2);

  return (
    <div>
      {itemlst.map((item) => (
        <div
          key={item?.card?.info?.id}
          className="pl-4 pb-4 m-2 text-left border-gray-200 border-b-2"
        >
          <div className="Maincontainer flex justify-between items-center">
            <div className="leftrecom w-9/12 pr-8">
              <h4 className="font-medium text-lg">{item?.card?.info?.name}</h4>
              <div className="price py-2">
                <p>
                  ₹
                  {item?.card?.info?.price / 100 ||
                    item?.card?.info?.defaultPrice / 100}
                </p>
              </div>
              <div className="description text-xs text-gray-400 text-justify py-2 ">
                <p>{item?.card.info.description} </p>
              </div>
            </div>
            <div className="rightrecom  w-3/12 relative">
              <div className="absolute top-16 left-2 sm:top-16 sm:left-8 z-10   text-green-400 ">
                <button className="sm:px-3  px-4 py-2 bg-white shadow-lg text-sm  rounded-md ">
                  Add +
                </button>
              </div>

              <img
                className="menuitem-logo  rounded-md ml-4 w-24 z-0"
                src={MENU_Image_URL + item?.card.info.imageId}
                alt="Restaurant-Logo"
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Itemlist;
