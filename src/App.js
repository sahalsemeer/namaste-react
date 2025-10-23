import React, { lazy, Suspense, useEffect, useState } from "react"
import ReactDOM from 'react-dom/client'
import { jsx } from "react/jsx-runtime";
import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter,Outlet,RouterProvider } from "react-router-dom";
import ErrorPage from "./pages/ErrorPage";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Food from "./pages/Foods";
import UserContext from "./context/UserContext";
import { Provider } from "react-redux";
import userStore from "./store/userStore";
import Cart from "./pages/Cart";
// import Grocery from "./pages/Grocery";




const Grocery = lazy(() => import('./pages/Grocery'))





const App = () => {
    const [userName,setUserName] = useState()

    useEffect(() => {
        const data = {username :"Sahal Semeer"}
        setUserName(data.username)

    },[])
    return(
        <div>
        <Provider store={userStore}>
        <UserContext.Provider value={{username:userName ,setUserName:setUserName}}>
        <Header/>
        <Outlet />
        </UserContext.Provider>
        </Provider>
        
        </div>
    )
}

const router = createBrowserRouter([
    {
        path:'/',
        element:<App/>,
        children:[
            {
                path:'',
                element:<Body />
            },
            {
                path:'/about',
                element:<About/>,
            },
            {
                path:'/contact',
                element:<Contact/>
            },
            {
                path:'/foods/:id',
                element:<Food/>
            },
            {
                path:'/grocery',
                element:
                <Suspense fallback={<h2>Loading</h2>}><Grocery/></Suspense>
                
            },
            {
                path:'/cart',
                element:<Cart />
            }
        ],
        errorElement:<ErrorPage />
    },
   
])




const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(<RouterProvider router={router}/>)










