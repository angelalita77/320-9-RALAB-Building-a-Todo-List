import { useState } from "react"
import Header from "./components/Header"

// Import components


function App() {
  const [count_even, setCount_even] = useState(0)



  return (
    <div>
      <Header />
    </div>
  )
}

export default App
