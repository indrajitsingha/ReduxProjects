import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const cartappslice = createSlice({
  name: "StoreApp",
  initialState: {
    products: [],
    cart: [],
    price: 0,
    status: "",
    searchData:[]
  },
  reducers: {
    ///add to cart function 
    addtocart(state, action) { 
      let items = { ...action.payload, quty: 1 };
      state.cart = [...state.cart, items];

      //price
      let total=0
      state.cart.map((x) => (total = total + x.price));
      state.price=total
    },
    ///Delete to cart function 
    Removecart(state, action) {
      state.cart.splice(action.payload, 1);

      //price
      let total=0
      state.cart.map((x) => (total = total + (x.price*x.quty)));
      state.price=total

    },
    ///incerease Quantity in  cart 
    increaseQty(state, action) {
      const finddata = state.cart.find((x) => x.id === action.payload);
      finddata.quty += 1;

      //price
      let total=0
      state.cart.map((x) => (total = total + (x.price*x.quty)));
      state.price=total
    },
    ///decerease Quantity in  cart
    DecreaseQty(state, action) {
      const finddata = state.cart.find((x) => x.id === action.payload);
      if (finddata.quty > 1) {
        finddata.quty -= 1;

        //price
        let total=0
        state.cart.map((x) => (total = total + (x.price*x.quty)));
        state.price=total
      }
    },
    GetSearchData(state,action){
      const Data= state.products.filter((x)=>x.category==action.payload)
      state.searchData=Data
    },

  },
  ///////featch apii 
  extraReducers: (builder) => {
    builder.addCase(featchProducts.pending, (state) => {
      state.status = "loading";
      console.log(state.status);
    })
    .addCase(featchProducts.fulfilled,(state,action)=>{
        state.products=action.payload ///featch product from api function 
        state.status = "complete";
        console.log(state.status);
    }).addCase(featchProducts.rejected,(state)=>{
        state.status = "failed";
        console.log(state.status);
        
    })
  },
});

 ///////featch apii function 

const featchProducts = createAsyncThunk("cartapp/products", async () => {
  const response = await axios.get("https://fakestoreapi.com/products");
  let data=response.data
  return data;
});

export default cartappslice.reducer;

export const { addtocart, Removecart, increaseQty, DecreaseQty ,GetSearchData} =
  cartappslice.actions;

  export {featchProducts};
