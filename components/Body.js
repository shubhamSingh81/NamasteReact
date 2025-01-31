import React, { useState, useEffect, useContext } from "react";
// import { restaurentList } from "../src/config";
import RestaurentCard from "./RestaurentCard";
import ShimmerUi from "./ShimmerUi";
import { Link } from "react-router-dom";
import { filteredData } from "../utils/Helper";
import useOnline from "../utils/useOnline";
import UserContext from "../utils/userContext";
const Body = () => {

  const [allRestaurent, setAllRestaurent] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");
  const { user, setUser } = useContext(UserContext)

  //empty dependency array => once affter render
  // dependency array [searchText] => once after render + everyTime after render (my searchtext changes)
  useEffect(() => {
    getRestaurents();
  }, []);

  async function getRestaurents() {
    const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING");
    const json = await data.json();
    console.log(json);
    setAllRestaurent(json?.data?.cards[2]?.data?.data?.cards);
    setFilteredRestaurants(json?.data?.cards[2]?.data?.data?.cards);
  }

  const isOnline = useOnline();
  if (!isOnline) {
    return <h1>Please check your internet connection</h1>
  }
  // conditional Rendring

  return allRestaurent?.length === 0 ? (
    <ShimmerUi />
  ) : (
    <>
      <div className="p-5 bg-pink-50 my-5">
        <input
          type="text"
          className="focus:bg-green-50 p-2 m-2"
          placeholder="search"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />

        <button
          className="p-2 m-2 bg-purple-900 hover:bg-gray-500 text-white rounded-md"
          onClick={() => {
            // need to filter data
            const data = filteredData(searchText, allRestaurent);
            setFilteredRestaurants(data);
          }}
        >
          Search
        </button>
        <input value={user.name} onChange={(e) => setUser({
          ...user,
          name: e.target.value,
        })}></input>
        {" "}
        <input value={user.email} onChange={(e) => setUser({
          ...user,
          email: e.target.value,
        })}></input>
      </div>
      <div className="flex flex-wrap">
        {filteredRestaurants.length === 0 ? (
          <h1>No Restaurent match your filter!</h1>
        ) : (
          ""
        )}
        {filteredRestaurants.map((restaurent) => {
          return (
            <Link
              to={"/restaurent/" + restaurent.data.id}
              key={restaurent.data.id}
            >
              <RestaurentCard {...restaurent.data} />
            </Link>
          );
        })}
      </div>
    </>
  );
};

export default Body;

