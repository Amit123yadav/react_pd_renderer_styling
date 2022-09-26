import React from 'react'
import data from './api'
const Header = () => {
    console.log(data)
  return (
    <div>
       {data.map((x)=>{
        return(
            <button>{x.category}</button>
        )
       })}
    </div>
  )
}

export default Header