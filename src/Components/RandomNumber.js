import React, { useState } from 'react'

const RandomNumber = () => {
    const [randomNum, setRandomNum] = useState([])
const [luck , setLuck] = useState([])

    const handleChange = () => {
        const x = Math.floor(Math.random() * 10)
        setRandomNum([...randomNum, x])
        let ar  = randomNum.filter((el)=>{
            if(el === 7){
                let count = 0
                return (count + 1 )
            }
        })
        setLuck(ar)
        if(ar.length === 4){
            alert('Wecome you are Lucky')
        }
        
    }

    return (
        <>
            <div >
                <h3>RandomNumber</h3>
                <button className='btn btn-info' value={randomNum} onClick={handleChange}>Genterator</button>
            </div>
            <div className='mt-5'>
                {randomNum.map((x, index) => {
                    return <h3> {index + 1} occur : {x}</h3>
                })}
            </div>
        </>
    )
}

export default RandomNumber