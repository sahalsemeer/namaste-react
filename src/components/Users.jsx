import React, { useState } from 'react'

const Users = (props) => {
    const [count] = useState(0)
  return (
    <div className='users-card'>
        <h1>Count:{count}</h1>
        <h3>Name:{props.name}</h3>
        <p>Address:{props.address}</p>
    </div>
  )
}

export default Users