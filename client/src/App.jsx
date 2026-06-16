import {Routes,Route} from 'react-router-dom'

import './App.css'

import View from './component/View'
import Product from './component/Product'
import Form from './admin/Form'
import Prodetails from './component/Prodetails'
import Checkout from './component/Checkout'
import Order from './component/Order'
import Login from './component/Login'
import Signup from './component/Signup'
import Navbar from './component/Navbar'
import Hero from './component/Hero'
import ProdTable from './admin/ProdTable'
function App() {


  return (
    <>
    <Navbar />
    <Routes>
      <Route path='/' element={<Hero  /> }/>
     <Route path='/view' element={<View  /> }/>
      <Route path='/pro' element={<Product  /> }/>
      <Route path='/product/:id' element={<Prodetails /> }/>
       <Route path='/form' element={<Form /> }/>
       <Route path='/checkout' element={<Checkout /> }/>
       <Route path='/order' element={<Order /> }/>
       <Route path='/login' element={<Login /> }/>
       <Route path='/signup' element={<Signup /> }/>
       <Route path='/table' element={<ProdTable /> }/>
    </Routes>
    </>
  )
}

export default App
