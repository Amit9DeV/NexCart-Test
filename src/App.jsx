import About from './pages/About'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Shop from './pages/Shop'
import Cart from './pages/Cart'
import Contact from './pages/Contact'
import Payment from './pages/Payment'
import Success from './pages/Success'
import Registration from './pages/Register'
import LoginFrom from './pages/LoginForm'
import { Routes,Route } from 'react-router-dom'
import './App.css'
import DeliveryAddr from './pages/DeliveryAddr'

function App() {


  return (
    <>
    <Navbar/>

   <Routes>

   <Route path='/' element = {<Home/>} ></Route>
   <Route path='/Shop' element = {<Shop/>} ></Route>
   <Route path='/About' element = {<About/>} ></Route>
   <Route path='/Contact' element = {<Contact/>} ></Route>
   <Route path='/Register' element = {<Registration/>} ></Route>
   <Route path='/login' element = {<LoginFrom/>} ></Route>
   <Route path='/Cart' element = {<Cart/>} ></Route>
   <Route path='DeliveryAddr' element = {<DeliveryAddr/>} ></Route>
   <Route path='Payment' element={<Payment/>}  ></Route>
   <Route path='/Success' element={<Success/>}  ></Route>
   </Routes>

   
    <Footer/>
    </>
  )
}

export default App