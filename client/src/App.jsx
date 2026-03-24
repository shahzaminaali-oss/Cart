import {Routes,Route} from 'react-router-dom'

import './App.css'
import Home from './component/Home'
import View from './component/View'
import Product from './component/Product'
import Form from './component/Form'
import Prodetails from './component/Prodetails'
import Checkout from './component/Checkout'
import Order from './component/Order'
function App() {


  return (
    <>
    <Routes>
    <Route path='/' element={<Home  /> }/>
     <Route path='/view' element={<View  /> }/>
      <Route path='/pro' element={<Product  /> }/>
      <Route path='/product/:id' element={<Prodetails /> }/>
       <Route path='/form' element={<Form /> }/>
       <Route path='/checkout' element={<Checkout /> }/>
       <Route path='/order' element={<Order /> }/>
    </Routes>
    </>
  )
}

export default App
