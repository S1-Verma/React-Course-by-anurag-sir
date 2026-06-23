

export default function CounterNew({count, setCount}) {
  return (
    <div className=''>
        <p className=' border-2 rounded-2xl m-4'>{count}</p>
        <button onClick={()=> setCount(count+1)} className=' border-2 cursor-pointer p-2 rounded-2xl font-normal '>Add Count</button>
    </div>
  )
}
