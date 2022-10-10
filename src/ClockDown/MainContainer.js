import React, { useEffect, useState } from 'react'
import ClockDown from './ClockDown'
import Timer from './Timer'

const MainContainer = () => {
  const [isActive, setIsActive] = useState(false)
  const [isPaused, setIsPaused] = useState(true)
  const [timer, setTimer] = useState(0)

  useEffect(() => {
    let interval = null
    if (isActive && isPaused === false) {
      interval = setInterval(() => {
        setTimer(timer + 10)
      }, 10)
    } 
    return () => {
      clearInterval(interval)
    }
  }, [isActive, isPaused, timer])

  const handleIsStart = () => {
    setIsActive (true)
    setIsPaused(false)
  }
  const handleReset = () => {
    setIsActive(false)
    setTimer(0)
  }
  const handleIsPaused = () => {
    setIsPaused(!isPaused)
  }
  return (
    <div className='main-Contaier'>
      <div className='stop-watch'>
      <h1 className='StopWatch'>ClockDown</h1>
      <Timer timer={timer}/>
      <ClockDown
      isActive={isActive}
      isPaused={isPaused}
      handleIsStart={handleIsStart}
      handleIsPaused={handleIsPaused}
      handleReset={handleReset}
       />
    </div>
    </div>
  )
}

export default MainContainer