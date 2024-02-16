import Rescard from "./RestaurantCard";

import { useState, useEffect } from "react";

import Shimmer from "./Shimmer";

const Bodyhead = () => {
  const [listOfRestaurants, setlistOfRestaurants] = useState([]);
  const [searchText, setsearchText] = useState("");
  const [filteredRestaurants, setfilteredRestaurant] = useState([]);

  // const arr = useState(resList);
  // const [listOfRestaurants, setlistOfRestaurants] = arr;

  // const arr = useState(resList);
  // const listOfRestaurants = arr[0];
  // const setlistOfRestaurants = arr[1];

  //use effect

  useEffect(() => {
    fetchData();
  }, []);

  // async function fetchDte() {
  //   const data = await fetch(
  //     "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.7601372&lng=77.1866183&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
  //   );

  //   const json = await data.json();

  //   console.log(json);
  // }
  const fetchData = async () => {
    const data = await fetch(
      "https://thingproxy.freeboard.io/fetch/https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.7601372&lng=77.1866183&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();

    // console.log(json);
    // console.log(
    //   json.data.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    // );
    // data.cards[4].card.card.gridElements.infoWithStyle.restaurants;
    setlistOfRestaurants(
      json.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );

    setfilteredRestaurant(
      json.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  if (listOfRestaurants.length === 0) {
    return <Shimmer />;
  }
  return (
    <div className="body">
      <div className="btnsandsearch">
        <div className="Search">
          <input
            className="serachbox"
            type="text"
            placeholder="Search Your Resaturant"
            value={searchText}
            onChange={(e) => {
              setsearchText(e.target.value);
            }}
          />

          <button
            className="buttonsearch"
            onClick={() => {
              {
                const updateRestaurant = listOfRestaurants.filter((res) =>
                  res.info.name.toLowerCase().includes(searchText.toLowerCase())
                );

                // console.log(filteredRestaurant);

                setfilteredRestaurant(updateRestaurant);
              }
            }}
          >
            Search
          </button>
        </div>

        <div className="filter-btn">
          <button
            className="filter"
            // onClick={() => console.log("Button Clicked")}
            onClick={() => {
              const filteredList = listOfRestaurants.filter(
                (x) => x?.info?.avgRating > 4
              );
              setfilteredRestaurant(filteredList);
            }}
          >
            Top Rated
          </button>
        </div>
      </div>

      <div className="Restaurant-Container">
        {filteredRestaurants.map(function (restaurants, keys) {
          return <Rescard keys={restaurants?.info?.id} resData={restaurants} />;
        })}
      </div>
    </div>
  );
};

export default Bodyhead;
