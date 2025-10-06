import { useState, useReducer } from "react"
import Header from "./components/Header"

// Import components
import TextInput from "./components/TextInput"

function App() {
  const [count_even, setCount_even] = useState(0)




  return (
    <div>
      <Header />
      <TextInput />

      {/* Putting the component structure of app */}
      {/* <TodoList /> */}
    </div>
  )
}

export default App
