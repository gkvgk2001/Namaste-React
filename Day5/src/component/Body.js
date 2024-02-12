import Rescard from "./RestaurantCard";
import resList from "../utils/mock_data";

import { useState } from "react";

const Bodyhead = () => {
  const [listOfRestaurants, setlistOfRestaurants] = useState(resList);

  // const arr = useState(resList);
  // const [listOfRestaurants, setlistOfRestaurants] = arr;

  // const arr = useState(resList);
  // const listOfRestaurants = arr[0];
  // const setlistOfRestaurants = arr[1];
  return (
    <div className="body">
      <div className="btnsandsearch">
        <div className="Search">
          <input type="text" placeholder="Search Your Resaturant" />
          <button className="buttonsear">Search</button>
        </div>
        <div className="filter-btn">
          <button
            className="filter"
            // onClick={() => console.log("Button Clicked")}
            onClick={() => {
              const filteredList = listOfRestaurants.filter(
                (x) => x.data.avgRating > 4
              );
              setlistOfRestaurants(filteredList);
            }}
          >
            Top Rated Restaurant
          </button>
        </div>
      </div>

      <div className="Restaurant-Container">
        {/* lots of restaurant card */}
        {/* // I will be reusing multiple times we will 
        build seprate componnet*/}
        {/* {
          function restaurancard(restuarnt){
            return <Rescard resData = restaurant />;
          }
        } */}
        {listOfRestaurants.map(function (restaurant) {
          return <Rescard key={restaurant.data.id} resData={restaurant} />;
        })}
      </div>
    </div>
  );
};

export default Bodyhead;
