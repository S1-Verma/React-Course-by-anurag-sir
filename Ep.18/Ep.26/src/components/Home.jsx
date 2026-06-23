import React, { useState } from 'react'
import CounterNew from './CounterNew'
import OldCounter from './OldCounter'

export default function Home() {
  const [count, setCount] = useState(0)


  return (
    <div className='font-bold text-xl text-center'>
      <h1>Home Container</h1>

      <div className='flex items-center justify-center'>
        <CounterNew count={count} setCount={setCount} />
      </div>
      <br />

      <hr className='py-3' />

      <div className='flex items-center justify-center'>
        <OldCounter  name=' Old counter ' />
      </div>
    </div>
  )
}
