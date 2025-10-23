import { CLOUDINARY_URL } from "../utils/constants";
import { getImageUrl } from "../data/swiggyMenuData";
import { useDispatch } from "react-redux";
import { addToCart } from "../store/cartSlice";


const MenuItems = ({items}) => {
    // console.log("MenuItems rendered for:", items.category);
    const dispatch = useDispatch()
    const handleAdd = (item) => {
       dispatch(addToCart(item))
    }
    return(
        <>
    
             {items.items.map(items => (
                <div key={items.id} className="flex justify-between p-8 bg-white mt-3 rounded">
                    <div>
                    <h3>{items.name}</h3>
                    <p>₹{items.price}</p>
                    <p>⭐️{items.rating}</p>
                    <p>{items.description}</p>
                </div>
                <div>
                    <img src={items.imageId} alt="" className="w-[200px] h-[140px]" />
                    <button onClick={() => {handleAdd(items)}} className="bg-black text-white p-1 absolute mx-15 rounded w-[50px] h-8">add</button>
                </div>
                </div>
                
             ))}
            

        </>
    )
}


export default MenuItems;





// description
// : 
// "Loaded with pepperoni and cheese"
// id
// : 
// "345002"
// imageId
// : 
// "sboh9btdjjxf8jnhvegn"
// isBestseller
// : 
// true
// isVeg
// : 
// false
// name
// : 
// "Pepperoni Pizza"
// price
// : 
// 499
// rating
// : 
// 4.5
// ratingCount
// : 
// 5600