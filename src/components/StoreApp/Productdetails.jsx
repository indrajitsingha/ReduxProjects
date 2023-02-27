import React,{useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams} from 'react-router-dom'
import {addtocart} from '../../Store/cartappslice'
import { featchProducts } from '../../Store/cartappslice';


const Productdetails = () => {
const dispatch =useDispatch()
const Data=useSelector((data)=>data.cartapp.products)
const {productId}=useParams();

const product =Data.find((x)=>x.id==productId)


useEffect(() => {
    dispatch(featchProducts())
    }, [])

  return (
    <div>
    {product ?
   
    <div class="min-w-screen min-h-screen bg-gray-200 flex items-center p-5 lg:p-10 overflow-hidden relative">
    <div class="w-full max-w-6xl rounded bg-white shadow-xl p-10 lg:p-20 mx-auto text-gray-800 relative md:text-left">
        <div class="md:flex items-center -mx-10">
            <div class="w-full md:w-1/2 px-10 mb-10 md:mb-0">
                <div class="relative">
                    <img src={product.image} class="w-full relative z-10" alt=""/>
                    <div class="border-4 border-yellow-200 absolute top-10 bottom-10 left-10 right-10 z-0"></div>
                </div>
            </div>
            <div class="w-full md:w-1/2 px-10">
                <div class="mb-10">
                    <h1 class="font-bold uppercase text-2xl mb-5">{product.title}</h1>
                    <h1 class="font-bold uppercase text-1xl mb-5">{product.category}</h1>
                    <p class="text-sm">{product.description}</p>
                </div>
                <div>
                    <div class="inline-block align-bottom mr-5">
                        <span class="text-2xl leading-none align-baseline">$</span>
                        <span class="font-bold text-5xl leading-none align-baseline">{product.price}</span>
                        <span class="text-2xl leading-none align-baseline">.99</span>
                    </div>
                    <div class="inline-block align-bottom">
                        <button class="bg-yellow-300 opacity-75 hover:opacity-100 text-yellow-900 hover:text-gray-900 rounded-full px-10 py-2 font-semibold" onClick={()=>dispatch(addtocart(product))}><i class="mdi mdi-cart -ml-2 mr-2"></i> Add to Cart</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
:""
    }
    </div>
  )
}

export default Productdetails