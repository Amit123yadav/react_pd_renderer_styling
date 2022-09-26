import React from 'react'

const LocationFilter = ({ handleLocation ,locationItems}) => {
  return (
    <div className='main_container'>
      <label for='location'>Location</label>
      <select className='main_container2' id='location' onChange={(e) => handleLocation(e.target.value)}>
       {locationItems.map((curElem)=>{
        return  <option value={curElem} >{curElem}</option>
       })}
      </select>
    </div>
  )
}

export default LocationFilter