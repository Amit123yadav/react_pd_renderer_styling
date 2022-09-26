import React from 'react'

const AllData = ({searchItems}) => {
    return (
        <>
            {searchItems.map((item) => {
                const { company, position, postedAt, contract, location, skills, id } = item
                return (
                    <div key={id}>
                        <div className='main-subContainer1'>
                            <h6>EYECAM</h6>
                        </div>
                        <div className='main_container1'>
                            <div className='main-subContainer2'>
                                <p>{company}</p>
                                <h5>{position}</h5>
                                <h6>{Math.ceil(
                                    (new Date().getTime() - new Date(postedAt).getTime()) /
                                    (3600 * 1000 * 24)
                                )}{" days ago "} . {contract} . {location}</h6>
                                <hr />
                                <span className='m'>
                                    {skills.map((el) => {
                                        return (
                                            <button className='btn1'>{el}</button>
                                        )
                                    })}
                                </span>
                            </div>
                        </div>
                    </div>
                )
            })}
        </>
    )
}

export default AllData