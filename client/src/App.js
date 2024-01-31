import React from 'react'
import Home from './components/Home'
import Signup from './components/Signup'
import About from './components/About'
import {Routes,Route} from react-router-dom

export default function App() {
  return (
    <div>
      <Routes>
        <Route exact path='/'>
          <Home/>
        </Route>
        <Route exact path='/signup' >
          <Signup/>
        </Route>
        <Route>
          <About/>
        </Route>
      </Routes>
    </div>
  )
}
