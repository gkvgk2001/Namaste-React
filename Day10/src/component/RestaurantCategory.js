import React, { useState } from "react";
import Itemlist from "./Itemlist";

const RestaurantCategory = ({ data, showItem, setShowIndex, dummy }) => {
  const { itemCards, title } = data;

  const [selected, setselected] = useState(true);

  function handleClick() {
    setShowIndex();
    setselected(!selected);
  }

  return (
    <div>
      <div className="container  bg-slate-100 sm:w-6/12 shadow-lg mx-auto my-8 p-5  ">
        <div
          className="head flex justify-between  cursor-pointer"
          onClick={handleClick}
        >
          <span className="text-lg font-bold">
            {title} ({itemCards.length})
          </span>
          <span className="text-2xl">{"+"}</span>
        </div>

        {selected && showItem && <Itemlist data={itemCards} data2={dummy} />}
      </div>
    </div>
  );
};

export default RestaurantCategory;
