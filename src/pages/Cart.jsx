import { useSelector } from "react-redux";
import MenuItems from "../components/MenuItems";

const Cart = () => {
    const cart = useSelector((store) => store.cart.items)
    console.log(cart);
    return(
        <div>
            <button >clear</button>
            <MenuItems items={{items:cart}} />
        </div>
  
   
  );
};


export default Cart;