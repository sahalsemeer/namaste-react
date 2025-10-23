import React from "react";


class UserClass extends React.Component{
    constructor(props){
        super(props)
        this.state ={
            count:0,
            count2:2
        }
        console.log(this.props.name + "Child Con");
    }
    async componentDidMount(){
        const data = await fetch('https://api.github.com/users/sahalsemeer')
        const json = await data.json()
        console.log(json);

        // console.log(this.props.name +"Child Mount");
    }
    componentDidUpdate(){
        console.log(this.props.name +"Child Update");
    }
    render() {
        // console.log(this.props.name +"Child Ren");
        return (
            <div className='users-card'>
    
                <h3>Name:{this.props.name}</h3>
                <p>Address:{this.props.address}</p>
            </div>
          )
    }
}

export default UserClass;
