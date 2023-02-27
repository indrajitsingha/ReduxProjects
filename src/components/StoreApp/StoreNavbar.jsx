import React,{useState} from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { Link, Outlet } from 'react-router-dom'
import { GetSearchData } from '../../Store/cartappslice'


const StoreNavbar = () => {
  const cartdetils= useSelector((data)=>data.cartapp )
  const dispatch=useDispatch()
  const [searchData, setsearchData] = useState("");

  const handleChange=(e)=>{
    setsearchData(e.target.value)
    
  }

  const searchbtn=()=>{
    dispatch(GetSearchData(searchData));
  }
 
 
  return (
    <>

   
<nav class=" h-[10vh] w-[100%] flex justify-between items-center bg-black " >
  <div class="h-[10vh] w-[30%] flex justify-between items-center ">
    <Link href="/Store" ><h1 class="text-[#eaeaea] pt-4 pl-5 text-[25px] font-serif ">E-Shop</h1></Link> 
  </div>

  <div class="h-[10vh] w-[40%] flex justify-center items-center ">
    <input type="text"  className='h-[40px] w-[60%] outline-none text-xl text-center' onChange={handleChange} value={searchData}/>
    <button className=' h-[40px] w-[120px] bg-green-500 text-white text-[20px]' onClick={searchbtn}> Search</button>
  </div>

  <div class="h-[10vh] w-[30%] flex justify-between items-center">
    <div class="lg:flex lg:items-stretch lg:justify-end ml-auto">
      <Link to="/store" class="flex-no-grow flex-no-shrink relative py-2 px-4 leading-normal text-white no-underline flex items-center hover:bg-grey-dark font-serif">Home</Link>
      <Link to="/store/cart" class="flex-no-grow flex-no-shrink relative py-2 px-4 leading-normal text-white no-underline flex items-center hover:bg-grey-dark font-serif">Cart : 
      
  
    <div class="relative ml-3 pb-2">
  <div class="t-0 absolute left-3">
    <p class="flex h-2 w-2 items-center justify-center rounded-full bg-red-500 p-3 text-xs text-white">{cartdetils.cart.length}</p>
  </div>
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="file: mt-4 h-6 w-6">
    <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
  </svg>
</div>

      
      </Link>
      <span  class="flex-no-grow flex-no-shrink relative py-2 px-4 leading-normal text-white no-underline flex items-center hover:bg-grey-dark font-serif">Price : {Math.floor(cartdetils.price)}/- </span>
    </div>
  </div>
</nav>
<Outlet/>
 </>
  )
}

export default StoreNavbar