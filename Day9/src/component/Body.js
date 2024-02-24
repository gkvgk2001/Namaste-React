import Rescard from "./RestaurantCard";

import { useState, useEffect } from "react";

import useOnlinestatus from "../utils/useOnlinestatus";

import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

const Bodyhead = () => {
  const [listOfRestaurants, setlistOfRestaurants] = useState([]);
  const [searchText, setsearchText] = useState("");
  const [filteredRestaurants, setfilteredRestaurant] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://thingproxy.freeboard.io/fetch/https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.7601372&lng=77.1866183&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();

    setlistOfRestaurants(
      json.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );

    setfilteredRestaurant(
      json.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  const onlineStatus = useOnlinestatus();

  if (onlineStatus === false) {
    return <h1>Looks Like you are Offline please come back online</h1>;
  }

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
          return (
            <Link
              keys={restaurants?.info?.id}
              to={"/restaurants/" + restaurants?.info?.id}
            >
              <Rescard resData={restaurants} />
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Bodyhead;
