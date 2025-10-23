import { useEffect, useState } from "react";
import { RESTRO_DATA } from "../utils/constants";
import restaurantMenuData from "../data/swiggyMenuData";
import { useParams } from "react-router-dom";
import MenuItems from "../components/MenuItems";
import RestrauntMenu from "../components/RestaurantMenu";

const Food = () => {
    const [showMenu,setShowMenu] = useState(1)
    const [menuData,setMenuData] = useState(restaurantMenuData)
  const {id} = useParams()
//   console.log(id);
  const restro = menuData.find((item => item.id === id))
  // console.log(restro);
  const {menu} = restro;
//   console.log(menu);
//   ;

const handleShowMenu = () => {
  setShowMenu(!showMenu)
}
  
    

  return(
    <div className="flex justify-center items-center"> 
        <div> 
            <div className="text-3xl text-left py-[40px] mb-[5px] w-200">
                <h2>{restro.name}</h2>
            </div>
            <div className="p-5 border border-gray-100 rounded shadow-2xl shadow-gray-700">
                    <span>{restro.avgRating}({restro.totalRatings} ratings)</span>
                    <span className="ml-4">{restro.costForTwo}</span>
                    <p className="mt-2">{restro.cuisines.join(', ')}</p>
                    <p className="mt-2">Outlet <span>{restro.areaName}</span></p>
                    <p className="mt-2">{restro.deliveryTime}</p>
            </div>
            <div className="mt-19 bg-gray-100 p-15 rounded-3xl" >
             {menu.map((category,index) => (
                        <RestrauntMenu key={category.category} category={category} showMenu = {index === showMenu ? true : false} setShowMenu = {() => setShowMenu(index)} />
             ))}
                
            </div>
            

        </div>
        </div>
        
  )
}



export default Food;