import Rescard from "./RestaurantCard";

import { useState, useEffect, useContext } from "react";

import useOnlinestatus from "../utils/useOnlinestatus";

import UserContext from "../utils/UserContext";

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
    console.log(
      json.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  const onlineStatus = useOnlinestatus();

  const { loggedinUser, setUsername } = useContext(UserContext);

  if (onlineStatus === false) {
    return <h1>Looks Like you are Offline please come back online</h1>;
  }

  if (listOfRestaurants.length === 0) {
    return <Shimmer />;
  }
  return (
    <div className="body">
      <div class=" btnsandsearch flex flex-1 items-center justify-center  px-10 gap-4">
        <div class="w-full max-w-lg">
          <div class="mt-5 sm:flex sm:items-center ">
            <input
              id="q"
              name="q"
              class="inline w-full rounded-md border 
               border-gray-300 bg-white py-2 pl-3 pr-3 leading-5 placeholder-gray-500
              focus:border-indigo-500 focus:placeholder-gray-400 focus:outline-none focus:ring-1 
               focus:ring-indigo-500 sm:text-sm"
              placeholder="Search your Restaurant"
              type="text"
              value={searchText}
              onChange={(e) => {
                setsearchText(e.target.value);
              }}
            />
            <button
              class="mt-3 inline-flex w-full items-center justify-center rounded-md border
                  border-transparent bg-indigo-600 px-4 py-2 font-medium text-white shadow-sm hover:bg-indigo-700 
             focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:mt-0 sm:ml-3 
              sm:w-auto sm:text-sm"
              onClick={() => {
                {
                  const updateRestaurant = listOfRestaurants.filter((res) =>
                    res.info.name
                      .toLowerCase()
                      .includes(searchText.toLowerCase())
                  );

                  setfilteredRestaurant(updateRestaurant);
                }
              }}
            >
              Search
            </button>

            <button
              className="mt-3 inline-flex w-full items-center justify-center rounded-md border mb-4
                  border-transparent bg-red-600 px-4 py-2 font-medium text-white shadow-sm hover:bg-indigo-700 
             focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:mt-1 sm:ml-5 sm:w-26 sm:text-md
              sm:pl-0 sm:pr-1  "
              // onClick={() => console.log("Button Clicked")}
              onClick={() => {
                const filteredList = listOfRestaurants.filter(
                  (x) => x?.info?.avgRating > 4
                );
                setfilteredRestaurant(filteredList);
              }}
            >
              <span>Top Rated </span>
            </button>
          </div>

          <div>
            <label>UserName:</label>
            <input
              id="q"
              name="q"
              class="inline w-full rounded-md border 
               border-gray-300 bg-white py-2 pl-3 pr-3 leading-5 placeholder-gray-500
              focus:border-indigo-500 focus:placeholder-gray-400 focus:outline-none focus:ring-1 
               focus:ring-indigo-500 sm:text-sm"
              placeholder="Set you Useranme"
              type="text"
              value={loggedinUser}
              onChange={(e) => {
                setUsername(e.target.value);
              }}
            />
          </div>
        </div>
      </div>

      <div className="Restaurant-Container rounded-lg flex  justify-evenly flex-wrap sm:gap-8 sm:flex sm:flex-wrap sm:justify-center ">
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
