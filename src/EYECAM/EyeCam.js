import React, { useState } from 'react'
import './eyecam.css'
import data from './api'
import LocationFilter from './LocationFilter'
import ContractFilter from './ContractFilter'
import AllData from './AllData'


//  dynamic state for use 
const filterLocation =[...new Set(data.map((ele)=>{
    return ele.location
}))]
const filterContract =[...new Set(data.map((ele)=>{
    return ele.contract
}))]



const EyeCam = () => {
    const [searchItems, setSearchItems] = useState(data)
    const [contractItems ,setContractItems] = useState(filterContract)
    const [locationItems ,setLocationItems] = useState(filterLocation)

    const handleContract = (contract) =>{
        const updateContract = data.filter((el)=>{
            return el.contract === contract
        })
        setSearchItems(updateContract)
    }
    const handleLocation = (location) =>{
        const updateLocation = data.filter((el)=>{
            return el.location === location
        })
        setSearchItems(updateLocation)
    }
    return (
        <>
            <div className='main-text'>
                <LocationFilter handleLocation={handleLocation} locationItems={locationItems}/>
                <ContractFilter handleContract={handleContract} contractItems={contractItems}/>
            </div>
           <AllData searchItems={searchItems} />
        </>
    )
}

export default EyeCam;