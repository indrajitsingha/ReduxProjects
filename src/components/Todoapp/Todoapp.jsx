import React,{useState,useEffect} from 'react'
import { useSelector , useDispatch} from 'react-redux';
import { FaEdit } from "react-icons/fa";
import { AiFillDelete } from "react-icons/ai";
import { BsCheck2All } from "react-icons/bs";





import { Addtodo,Removetodo ,UpdateTodo,UpdateTodoData,Todocomplete} from '../../Store/Todoslice'

const Todoapp = () => {
    const dispatch=useDispatch()
    const Data=useSelector((data)=>data)

    const [task, settask] = useState("");

    const [update, setupdate] = useState(false);
    const [updatedData, setupdatedData] = useState();


   const formsubmit=(e)=>{
    e.preventDefault() 
    dispatch(Addtodo(task))
    console.log(Data);
    settask('')
   }

   const updateTodo=(id)=>{
    setupdate(true)
    dispatch(UpdateTodo(id))
    console.log(Data);
   }

   const updateinfo=()=>{
    dispatch(UpdateTodoData(updatedData))
    setupdate(false)
   }

   const completeTodo=(id)=>{
    dispatch(Todocomplete(id))
   }
useEffect(() => {
    setupdatedData(Data.Todo.updateData.Task)
}, [Data.Todo.updateData])
   
  return (
    <div className='min-h-[91.2vh] w-[100%] bg-black flex  justify-start items-center flex-col pt-[20%] md:pt-[0%] p-2 mb-[10%] md:mb-[0%] '>

            <h1 className='text-[50px] font-semibold text-green-300 mb-5'>To DO List</h1>
       
            {update==true ?
                <div className='min-h-[30%] w-[90%] md:w-[50%] bg-green-400 flex justify-between items-center flex-col md:flex-row p-2'>
                <input className='text-black font-mono text-[30px] w-[99%] md:w-[80%] outline-none' name='todoText' value={updatedData} onChange={(e)=>setupdatedData(e.target.value)}/>
                <div className='flex justify-center items-center w-[100%] sm:w-[20%] gap-1'>
                    <button className='h-[40px] md:[110px] w-[50%] md:w-[45%] bg-green-600 text-white hover:bg-[crimson]' type='submit' onClick={updateinfo}>Update</button>
                    <button className='h-[40px] md:[110px] w-[50%] md:w-[45%] bg-green-600 text-white hover:bg-[crimson]' type='submit'>cancel</button>
                </div>
            </div>:
             
      

            <form className='min-h-[30%] w-[90%] md:w-[50%] bg-green-400  flex justify-between items-center flex-col md:flex-row p-2' onSubmit={formsubmit}>
                <input className='text-black font-mono text-[30px] w-[99%] md:w-[80%] outline-none' name='todoText'  value={task} onChange={(e)=>settask(e.target.value)}/>
                <button className='h-[40px] md:[110px] w-[100%] md:w-[20%] bg-green-600 text-[20px]  text-white hover:bg-[crimson]' type='submit'>Save</button>
            </form>
        }
     
{
  Data.Todo?  Data.Todo.Todo.map((x,index)=>{
        return(

                    <div className='min-h-[30%] w-[90%] md:w-[50%] bg-[#3F0071] flex justify-evenly items-center md:justify-between md:items-center p-2 md:p-1 m-2'  >
                    <h1 className={`text-white font-mono text-[22px] ${x.complete && 'line-through'}`} > <span>{x.Task}</span></h1>
                    <div className=' h-[102px] md:h-[50px] w-[33%] md:w-[18%] flex justify-center items-center flex-col md:flex-row'>
                        <button className='h-[50px] min-w-[10%]  text-[#3CCF4E] text-[25px] md:pl-2' onClick={()=>completeTodo(x.id)}><BsCheck2All/></button>
                        <button className='h-[50px] min-w-[10%] text-[#0014FF]  text-[25px] md:pl-2' onClick={()=>updateTodo(x.id)}><FaEdit/></button>
                        <button className='h-[50px] min-w-[10%] text-[crimson] text-[25px] md:pl-2'  onClick={()=>dispatch(Removetodo(index))}><AiFillDelete/></button>
                    </div>
                </div>

                )
    }):""
}  
          
        </div>
  )
}

export default Todoapp