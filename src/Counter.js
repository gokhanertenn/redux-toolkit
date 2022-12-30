import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from './counter/counterSlice'

export default function Counter() {
  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()

  return (
    <div>
      <div>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Artır
        </button>
        <span>{count}</span>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Azalt
        
        </button>
      </div>
    </div>
  )
}
