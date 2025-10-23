import { useContext, useEffect, useState } from "react";
import RestrauntCard, { withPromotedLabel } from "./RestrauntCard";
import useOnlineStatus from "../utils/useOnlineStatus";
import { Link } from "react-router-dom";
import restaurantPreviewData from "../data/swiggyRestroData";
import UserContext from "../context/UserContext";

// setRestroData(data?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
const Body = () => {
  const onlineStatus = useOnlineStatus();
  const [restroData, setRestroData] = useState(restaurantPreviewData);
  const [filertedData, setFilteredData] = useState(restaurantPreviewData);
  const RestroCardPromoted = withPromotedLabel(RestrauntCard);
  const data = useContext(UserContext)

  if (onlineStatus === false) {
    return <div>You are Offline!</div>;
  }

  return (
    <div className="body">
      <div className="flex justify-center p-5">
        <div className="top">
          <button
            className="w-[200px] p-[15px] m-[5px] hover:bg-red-900 rounded text-black cursor-pointer"
            onClick={() => {
              filertedData === restroData
                ? setFilteredData(
                    restroData
                      .filter((item) => Number(item.avgRating) > 4.3)
                      .sort((a, b) => b.avgRating - a.avgRating)
                  )
                : setFilteredData(restroData);
            }}
          >
            {filertedData === restroData ? "Top Rated Restros" : "Back"}
          </button>
        </div>
        <div className="ml-45">
          <input
            type="text"
            placeholder="search"
            className="p-[15px] mt-[10px] rounded text-black border-1-black "
          />
          <button className="p-[10px] w-[100px] m-[5px] bg-red-900 rounded text-white cursor-pointer">
            Search
          </button>
          <label htmlFor="">Username: </label>
          <input type="text" className="border border-black" value={data.username} onChange={(e)=>{data.setUserName(e.target.value)}}/>
        </div>
      </div>
      <div>
        <div className="flex flex-wrap font-display">
          {filertedData.map((item) => {
            //if the restro === 'promoted' add <PromotedRestroCard/>
            return (
              <Link key={item.id} to={"/foods/" + item.id}>
                {item.promoted ? (
                  <RestroCardPromoted resData={item}  />
                ) : (
                  <RestrauntCard resData={item}/>
                )}
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Body;
