import React, { useState } from 'react'
import './select.css'

const MultipleSelect = ({ options, onChange, state, handleOpen, isActive, multiple }) => {
    var value = Object.keys(state).map((key) => [Number(key), state[key]]);

    function handleClear() {
        multiple ? onChange([]) : onChange(undefined)
    }
    function handleChange(option) {
        onChange([...value, option.label])
    }
    const isOptionSelected = (option) => {
        return option === value
    }
    const selectOption = (v) => {
        let a = value.filter((el) => {
            return el !== v
        })
        onChange(a)

    }
    return (
        <>
            <div className='main'>
                <div className='main_container container'>
                    <div className='value_type row '>
                        {multiple ?
                            value.map((v, i) => <button
                                key={Math.floor(Math.random * 10).toFixed()}
                                onClick={e => {
                                    e.stopPropagation()
                                    selectOption(v)
                                }}
                                className='top_btn col-'
                            >
                                {v}
                                <span className='remove_btn'>&times;</span>
                            </button>)
                            : state?.label}
                            <div className='inner_container'>
                            <button className='cross' onClick={(e) => { handleClear() }}>
                                &times;
                            </button>
                            <div className='down_arrow' onClick={handleOpen}></div>
                        </div>
                    </div>
                   
                        
        
                </div>
                <ul className={isActive ? 'options1' : 'options'}>
                    {options?.map((opt) => {
                        return (
                            <li
                                onClick={(e) => { handleChange(opt) }}
                                className={isOptionSelected(opt) ? 'selcted' : 'option'} >{opt.label}</li>
                        )
                    })}
                </ul>
            </div>

        </>
    )
}

export default MultipleSelect