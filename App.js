
import React,{ useState } from 'react'
import "./App.css"

const App = () => {

  const [myName, setMyName] = useState('Vishal')

  const changeName=()=>{

    let val=myName
    if(val==="Vishal"){
      setMyName("Good Morning")
    }else{
      setMyName("Vishal")
    }
  }
  return (
    <div>
      <h1>{myName}</h1>
      <button className="btn" onClick={changeName}>Click me</button>
    </div>
  )
}

export default App
