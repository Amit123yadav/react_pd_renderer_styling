import React, { useState } from 'react'
import './select.css'

const MultipleSelect = ({ options, onChange, state, handleOpen, isActive, multiple }) => {
    let value = Object.keys(state).map((key) => state[key]);
    console.log(value)
    function handleClear() {
        multiple ? onChange([]) : onChange(undefined)
    }
    function handleChange(option) {
                onChange([...value, option.label])
    }
    const isOptionSelected = (option) => {
        return multiple ? value.includes(option) : option === value
    }
    const selectOption = (v) => {
        let a =  value.filter((el)=>{
            return el !== v
        })
        onChange(a)

    }
    return (
        <div
      className='container'
    >
      <span className='value'>
        {multiple
          ? value.map(v => (
              <button
                key={v.value}
                onClick={e => {
                  e.stopPropagation()
                  selectOption(v)
                }}
                className="option-badge"
              >
                {v}
                <span className="remove-btn">&times;</span>
              </button>
            ))
          : value}
      </span>
      <button
        onClick={e => {
         
            handleClear()
        }}
        className="clear-btn"
      >
        &times;
      </button>
      <div className='divider'></div>
      <div className='caret'  onClick={handleOpen}></div>
      <ul className={'options'+ (isActive ? 'show' : "")}>
        {options.map((option) => (
          <li
            onClick={e => {
             
                handleChange(option)
            }}
            key={option.value}
            className={'option'
             + (isOptionSelected(option) ? 'selected' : ""
        )}
          >
            {option.label}
          </li>
        ))}
      </ul>
    </div>
    )
}

export default MultipleSelect