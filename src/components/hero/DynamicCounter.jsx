import React, { useEffect, useState } from 'react'

const DynamicCounter = ({start, end, duration}) => {

  const [count, setCount] = useState(start)
  const increment = (end - start) / (duration * 100);

  useEffect(() => {
    if(start <= end) {
      const interval = setInterval(() => {
        if(count < end) {
          setCount((prevCount) => prevCount + increment);
        } else {
          clearInterval(interval);
        }
      }, 1);
      return () => clearInterval(interval);
    }
  }, [count, start, end, duration, increment])

  return (
    <>
      {Math.round(count)}
    </>
  )
}

export default DynamicCounter
