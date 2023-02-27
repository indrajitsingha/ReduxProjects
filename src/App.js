import React from 'react'
import './App.css'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Navbar from './Common/Navbar'
import Counter from './components/counter/Counter'
import Todoapp from './components/Todoapp/Todoapp'
import StoreNavbar from './components/StoreApp/StoreNavbar'
import Home from './components/StoreApp/Home'
import Cart from './components/StoreApp/Cart'
import Error from './Common/Error'
import Productdetails from './components/StoreApp/Productdetails'

const App = () => {
  return (
    <div>
      
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Counter/>}/>
        <Route path="todoapp" element={<Todoapp/>}/>

        <Route path="store" element={<StoreNavbar/>}>
          <Route index element={<Home/>}/>
          <Route path="/store/:productId" element={<Productdetails/>}/>
          <Route path="cart" element={<Cart/>}/>
        </Route>

        <Route path="*" element={<Error/>}/>

      </Routes>
      

      </BrowserRouter>


    </div>
  )
}

export default App
