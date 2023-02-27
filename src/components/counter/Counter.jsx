import React,{useState} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Incement,Decrement,incrementbynumber} from '../../Store/index'


const Counter = () => {
const value =useSelector((state)=>state)
const dispatch =useDispatch()

const [state, setstate] = useState(0);


  return (
   <>
       <div className='flex justify-center items-center flex-col gap-5 min-h-[91.2vh] max-w-[100%] bg-slate-400'>
        <div className="">
        <button className="h-[50px] w-[250px] bg-green-500 text-white text-center text-[40px] font-mono" onClick={()=>dispatch(Incement())}>+</button>
        <span className='m-2 text-[40px] bg-sky-600 p-1 text-white rounded' >{value.counter.counter}</span>
        <button className="h-[50px] w-[250px] bg-red-500 text-white text-center text-[40px] font-mono" onClick={()=>dispatch(Decrement())}>-</button>
        </div>
        <div className="">
        <input type="text" className="h-[50px] w-[250px]  text-center text-[30px] font-mono" value={state} onChange={(e)=>setstate(e.target.value)} />
        <button className="h-[50px] w-[250px] bg-red-500 text-white text-center text-[30px] font-mono" onClick={()=>dispatch(incrementbynumber(Number(state)))}>inc by 50</button>
        </div>
        </div>

    </>
  )
}

export default Counter