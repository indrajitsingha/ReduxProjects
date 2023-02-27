import React from "react";
import { useSelector,useDispatch } from "react-redux";
import {Removecart,increaseQty,DecreaseQty} from '../../Store/cartappslice'

const Cart = () => {
  const CartData = useSelector((data) => data.cartapp);
  const dispatch=useDispatch()
  return (
    <>
       {  CartData.cart.length>0?
        <div class="container mx-auto mt-10">
        <div class="flex shadow-md my-10">
          <div class="w-3/4 bg-white px-10 py-10">
            <div class="flex justify-between border-b pb-8">
              <h1 class="font-semibold text-2xl">Shopping Cart</h1>
              <h2 class="font-semibold text-2xl">{CartData.cart.length} Items</h2>
            </div>
            <div class="flex mt-10 mb-5">
              <h3 class="font-semibold text-gray-600 text-xs uppercase w-2/5">
                Product Details
              </h3>
              <h3 class="font-semibold  text-gray-600 text-xs uppercase w-1/5 text-center">
                Quantity
              </h3>
              <h3 class="font-semibold  text-gray-600 text-xs uppercase w-1/5 text-center">
                Price
              </h3>
              <h3 class="font-semibold  text-gray-600 text-xs uppercase w-1/5 text-center">
                Total
              </h3>
            </div>

              {
  CartData.cart.map((product,index)=>{
    return(
            
            
             <div key={product.id} class="flex items-center hover:bg-gray-100 -mx-8 px-6 py-5">
              <div class="flex w-2/5">
                <div class="w-20">
                  <img
                    class="h-24"
                    src={product.image}
                    alt=""
                  />
                </div>
                <div class="flex flex-col justify-between ml-4 flex-grow">
                  <span class="font-bold text-sm"> {product.title}</span>
                  <span class="text-red-500 text-xs">{product.category}</span>
                  <button
                    class="font-semibold bg-[crimson] text-white"
                    onClick={()=>dispatch(Removecart(index))}
                  >
                    Remove
                  </button>
                </div>
              </div>
              <div class="flex justify-center w-1/5">
              <button class=" bg-green-500 text-[20px] p-2 text-white" onClick={()=>dispatch(DecreaseQty(product.id))}>
                   -
                </button>

                <input
                  class="mx-2 border text-center w-8"
                  type="text"
                  value={product.quty}
                />
                <button class=" bg-[crimson] text-[20px] p-2 text-white" onClick={()=>dispatch(increaseQty(product.id))}>
                   +
                </button>
              </div>
              <span class="text-center w-1/5 font-semibold text-sm">
              ${product.price}
              </span>
              <span class="text-center w-1/5 font-semibold text-sm">
                $400.00
              </span>
            </div>

      )
  })
}
            





          </div>

          <div id="summary" class="w-1/4 px-8 py-10">
            <h1 class="font-semibold text-2xl border-b pb-8">Order Summary</h1>
            <div class="flex justify-between mt-10 mb-5">
              <span class="font-semibold text-sm uppercase">Items : {CartData.cart.length}</span>
              <span class="font-semibold text-sm">Total : {Math.floor(CartData.price)}$</span>
            </div>
            <div></div>

            <button class="bg-indigo-500 font-semibold hover:bg-indigo-600  py-3 text-sm text-white uppercase w-full">
              Checkout
            </button>
          </div>
        </div>
      </div>
      :<div className=" w-[100%] flex flex-col items-center justify-center"> 
<img className="h-[75vh] "  src="https://img.freepik.com/premium-vector/flat-modern-illustration-empty-cart_203633-8027.jpg?w=740"/>
<button className="bg-[crimson] hover:bg-blue-600 rounded mb-2 p-3  text-white">Continue Shopping </button>
</div>
}
    </>
  );
};

export default Cart;
