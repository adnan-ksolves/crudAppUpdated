import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './Components/Home'
import Nav from "./Components/Nav"
import Login from "./Components/Login"
import Create from './Components/Create'
import Teachers from './Components/Teachers'
import Students from './Components/Students'
import Update from './Components/Update'


const App = () => {
  return (
    <div>
      <Router>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/login/:user" element={<Login />}></Route>
          <Route path="/create/:user" element={<Create />}></Route>
          <Route path="/teachers/account/:name" element={<Teachers />}></Route>
          <Route path="/students/account/:name" element={<Students />}></Route>
          <Route path="/update/:user" element={<Update />}></Route>
        </Routes>
      </Router>
    </div>
  )
}

export default App
