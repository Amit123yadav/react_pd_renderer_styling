import React from 'react'
import './select.css'
const SingleSelect = ({ handleChange, handleClick, isActive, state, options }) => {
    

    return (
        <>
            <div className='main'>
                <div className='mainContainer'>
                    <h3>Choose Lang : </h3>
                    <div className='main1'>
                        <div className='mb-4'>
                            <span rows='3' cols='50'  >{state}</span>
                        </div>
                        <i className='fa-solid fa-angle-down icons' onClick={handleClick}></i>
                    </div>
                </div>
                <div className={isActive ? 'mainHead2' : 'mainHead1'}>
                    <div className='mainHead'>
                        <div className='main-header'  >
                            {options.map((opt) => {
                                return (
                                    <span onClick={handleChange}>
                                        {opt.label} 
                                    </span>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default SingleSelect