
import React,{useEffect,useState} from "react";
import { useDispatch,useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { addtocart } from "../../Store/cartappslice";
import {featchProducts} from '../../Store/cartappslice'


const Home = () => {
  const dispatch=useDispatch()
  const Products=useSelector((data)=>data.cartapp)
  const [Data, setData] = useState([]);

useEffect(() => {
dispatch(featchProducts())

}, [])

useEffect(() => {
    if(Products.searchData.length>0){
      setData(Products.searchData)
    }else{
      setData(Products.products)
   }
 
}, [Products.status,Products])



console.log(Data);




  return (
    <div>
      <div className="pt-5  bg-white">
        <h1 className="text-center text-2xl font-bold text-gray-800">
          All Products
        </h1>
      </div>

      <section className="py-5 ">
        <div className="mx-auto grid max-w-[90%] grid-cols-1 gap-6 p-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
         {
          Products.status=="loading"?
         <div class="loader"></div>
         :Data.map((product)=>{
          return(
        <Link to={`/store/${product.id}`}>
          <article key={product.id} className="rounded-xl bg-white p-3 shadow-lg hover:shadow-xl hover:transform hover:scale-105 duration-300 ">
           
              <div className="relative flex justify-center items-center overflow-hidden rounded-xl">
                <img src={product.image} className="h-[20vh]" alt="Hotel Photo" />
               
              </div>

              <div className="mt-1 p-2">
                <h2 className="text-slate-700">{product.title}</h2>
                <p className="mt-1 text-sm text-slate-400">{product.category}</p>

                <div className="mt-3 flex items-end justify-between">
                  <p>
                    <span className="text-lg font-bold text-blue-500">${product.price}</span>
                    <span className="text-sm text-slate-400">/Rating:{product.rating.rate}</span>
                  </p>

                  <div className="flex items-center space-x-1.5 rounded-lg bg-black px-4 py-1.5 text-white duration-100 hover:bg-blue-600">
                  
                    <button className="text-sm" onClick={()=>dispatch(addtocart(product))}>Add to cart</button>
                  </div>
                </div>
              </div>
          
          </article>
          </Link>
          )

          })
          }
        </div>
      </section>
    </div>
  );
};

export default Home;
