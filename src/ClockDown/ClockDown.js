import React from 'react'

const ClockDown = (props) => {
    const timerStart = (
        <div className='btn btn-one' onClick={props.handleIsStart}>
            Start
        </div>
    )

    const activeTimer = (
        <div className='btn-grp'>
            <div className='btn btn-one' onClick={props.handleReset}>
                Reset
            </div>
            <div className='btn btn-one' onClick={props.handleIsPaused}>
                {props.isPaused ? 'Resume' : 'Paused'}
            </div>
        </div>
    )
    return (
        <div>
            {props.isActive ? activeTimer : timerStart}
        </div>
    )
}

export default ClockDown