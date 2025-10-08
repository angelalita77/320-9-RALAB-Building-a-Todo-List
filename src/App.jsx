import { useState, useReducer } from "react"
import Todos from "./useReducer/Todos"

// Import components
import Header from "./components/Header"

 
function App() {
 

  return (
    <div>
      <Header /> 
      <Todos />
    </div>
  )
}

export default App
