import { configureStore } from "@reduxjs/toolkit";

import counterSlicereducer from "./index"
import Todoslicereducer from './Todoslice'
import cartappslice from "./cartappslice";

const store = configureStore({
    reducer:{
    counter: counterSlicereducer,
    Todo:Todoslicereducer,
    cartapp:cartappslice
    }
})

export default store;