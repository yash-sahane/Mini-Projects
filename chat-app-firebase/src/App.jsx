import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Chat from './Pages/Chat'
import Login from './Pages/Login'
import Signup from './Pages/Signup'

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element={<Chat />}></Route>
          <Route path='/login' element={<Login />}></Route>
          <Route path='/signup' element={<Signup />}></Route>
        </Routes>
      </Router>
    </div>
  )
}

export default App