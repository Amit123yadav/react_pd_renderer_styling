import React, { useReducer } from 'react'

const initialCount = 0

const reducer = (state, action) => {
    switch (action) {
        case 'increment':
            return  state + 1 
        case 'decrement':
            if(state > 0) {
                return state - 1
            }else{
                return state = 0
            }
        case 'reset':
            return initialCount
        default:
            return state
    }
}

const Counter = () => {
    const [state, disptach] = useReducer(reducer, initialCount)
    console.log(state)
    return (

        <div>
            <h1>Count  : {state}</h1>
            <div style={{display : 'flex' ,alignItems : 'center' , justifyContent : 'space-evenly' , marginTop : '3rem'}}>
            <button  onClick={() => disptach('increment')}>+</button>
            <button onClick={() => disptach('decrement')}>-</button>
            <button onClick={() => disptach('reset')}>Reset</button>
            </div>
        </div>
    )
}

export default Counter