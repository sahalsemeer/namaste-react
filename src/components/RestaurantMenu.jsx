import MenuItems from "./MenuItems";
import { useState } from "react";

const RestrauntMenu = ({category,showMenu,setShowMenu}) => {
    // const [showMenu,setShowMenu] = useState(false);

    const handleShowMenu = () => {
        setShowMenu()
    }
    // console.log(category);
    return (
        <>
        <div  className="flex justify-between mt-[10px] p-5 bg-white rounded-2xl" onClick={handleShowMenu}  >
        <h3>{category.category} ({category.items.length})</h3>
         <p>⌄</p>
        </div>
        {showMenu && <MenuItems items={category} />}
        
        </>

    )
}


export default RestrauntMenu;