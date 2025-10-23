import React from "react";
import UserClass from "../components/UserClass";
import Users from "../components/Users";
import UserContext from "../context/UserContext";


class About extends React.Component{
    constructor(props){
        super(props)
        // console.log("Parent Con");
    }
    componentDidMount(){
        // console.log("parent mount");
    }
    componentDidUpdate(){
        // console.log("par comp update");
    }
    render(){
        console.log("Parent ren");
        return (
            <div>
                {/* <Users name={"Sahal"} address={"Mahe"}/> */}
                <UserClass name={"1"} address={"Mahe"}/>
                <UserClass name={"2"} address={"Maheiku"}/>
                <UserClass name={"3"} address={"sk"}/>
                <UserClass name={"4"} address={"Mdfgahe"}/>
                <UserClass name={"5"} address={"Mamnihe"}/>
                {/* <UserContext.Consumer>
                    {((data) => <h3>{data.LoggedIn}</h3>)}
                </UserContext.Consumer> */}
            </div>
            
        )
        
        
    }
}
// const About = () => {
//     return (
//         <div>
//             <Users name={"Sahal"} address={"Mahe"}/>
//             <UserClass name={"Sahal"} address={"Mahe"}/>
//         </div>
//     )
// }

export default About;