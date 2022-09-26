import React from 'react'

const ContractFilter = ({ handleContract, contractItems }) => {
    return (
        <div className='main_container'>
            <label for='contract'>Contract</label>
            <select className='main_container2' id='contract' onChange={(e) => handleContract(e.target.value)}>
                {contractItems.map((curEle) => {
                    return (
                        <>
                            <option value={curEle} >{curEle}</option>
                        </>
                    )
                })}
            </select>
        </div>
    )
}

export default ContractFilter