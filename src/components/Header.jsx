import { useContext, useEffect, useState } from "react"
import { LOGO_IMG } from "../utils/constants"
import { Link } from "react-router-dom"
import UserContext from "../context/UserContext"
import { useSelector } from "react-redux"
const Header = () => {
      const [login,setLogin] = useState('Login')
      const { LoggedIn, username} = useContext(UserContext)
    //   console.log(LoggedIn);
    //   console.log(userName);
    const cart = useSelector((store) => store.cart.items)
    console.log(cart);

      useEffect(() => {
        // console.log('useEffect called!');
      },[login])
    //   console.log('header rendered');
    //   console.log(login);
    return(
        <div className="flex justify-between items-center h-25 p-10  bg-gray-100 shadow-2xs">
            <div className="logo">
                {/* <img src={LOGO_IMG} alt="FoodCart" className="w-36" /> */}
                <h3 className="font-heading text-4xl font-extrabold">FoodHere.</h3>
            </div>
            <div >
                <ul className="flex p-3 font-display ">
                    <li className="ml-5 "><Link to='/'>Home</Link></li>
                    <li className="ml-5"><Link to='about'>About Us</Link></li>
                    <li className="ml-5"><Link to='contact'>Contact Us</Link></li>
                    <li className="ml-5"><Link to='grocery'>Grocery</Link></li>
                    <li className="mx-5 font-bold text-xl"><Link to='cart'>Cart ({cart.length})</Link></li>
                    <li>{LoggedIn}</li>
                    <li>{username}</li>
                    <div className="ml-5">
                    <button onClick={() => login === 'Login'? setLogin('Logout'):setLogin('Login')} className="login-btn">{login}</button>
                </div>
                </ul>
                
            </div>
        </div>
    )
}

export default Header