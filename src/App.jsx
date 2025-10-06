import { useState, useReducer } from "react"


// Import components
import TextInput from "./components/TextInput"
import Header from "./components/Header"
import todoReducer from "./todoReducer"
 
// Import data (initialSet)
import { initialState } from './data/initialState'
import { prerenderToNodeStream } from "react-dom/static"


function App() {
  const[todos, dispatch] = useReducer(todoReducer, initialState)
  console.log(prerenderToNodeStream)



  return (
    <div>
      <Header />
      <TextInput dispatch={todoReducer} />

      {/* Putting the component structure of app */}
      {/* <TodoList /> */}
    </div>
  )
}

export default App
