import { useState } from 'react'
import Register from './Register'
import Login from './Login'
import Landing from './Landing'
import './index.css'
import {BrowserRouter,Routes, Route} from 'react-router-dom'
function App() {

  return (
    <BrowserRouter><Routes>
    <Route path='/register' element={<Register/>}></Route>
    <Route path='/login' element={<Login/>}></Route>
    <Route path='/landing' element={<Landing/>}></Route>
    </Routes></BrowserRouter>
  )
}

export default App
