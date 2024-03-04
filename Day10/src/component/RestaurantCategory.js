import React, { useState } from "react";
import Itemlist from "./Itemlist";

const RestaurantCategory = (data) => {
  const [selected, setselected] = useState(false);

  const { itemCards, title } = data.data;

  function handleClick() {
    setselected(selected === true ? false : true);
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
          <span className="text-2xl">{selected === true ? "-" : "+"}</span>
        </div>

        <div>{selected && <Itemlist data={itemCards} />}</div>
      </div>
    </div>
  );
};

export default RestaurantCategory;
