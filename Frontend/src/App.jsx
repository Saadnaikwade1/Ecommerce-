import React, { useEffect, useState } from 'react'
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import Home from './Components/Home'
import Login from './Components/Login'
import Register from './Components/Register'
import Navbar from './Components/Navbar'
import Logout from './Components/Logout'
import Context from './Components/Context'
import Cookies from "js-cookie"
import AllProduct from './Components/AllProduct'
import Mobiles from './Components/Mobiles'
import Computers from './Components/Computers'
import Gadgets from './Components/Gadgets'
import Others from './Components/Others'
import AddProduct from './Components/AddProduct'

function App() {
  let [state,setState]=useState({"token":"","name":"","uid":"","role":""})
  let updState=(obj)=>{
    setState({...state,...obj})
  }
  useEffect(()=>{
    let x=Cookies.get("lg")
    if(x==undefined){
     setState({"token":"","name":"","uid":"","role":""}) 
    }else{
      setState(JSON.parse(x))
    }
  },[])
  let user={"state":state, "updState":updState}
  return (
    <BrowserRouter>
    <Context.Provider value={user}>

    <Navbar/>

    <Routes>
      <Route path='/' element={<Home/>}>
      <Route path='/' element={<AllProduct/>}/>
      <Route path='/mobiles' element={<Mobiles/>}/>
      <Route path='/computers' element={<Computers/>}/>
      <Route path='/gadgets' element={<Gadgets/>}/>
      <Route path='/others' element={<Others/>}/>

      </Route>
      <Route path='/addprod'element={<AddProduct/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/reg' element={<Register/>}/>
      <Route path='/logout' element={<Logout/>}/>

      <Route/>
    </Routes>
    </Context.Provider>

    </BrowserRouter>
  )
}

export default App
