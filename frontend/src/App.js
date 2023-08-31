import { useState } from "react"
import { readTodos} from "./api/readTodos"

const App = ()=> {
  const [todos, setTodos]= useState("")

  const handler = async ()=>{
    let data = await readTodos()
    console.log(data)
  }
  return (
    <div>
      <h1>hi there</h1>
      <button onClick = {handler}>get data</button>
    </div>
  )
}

export default App