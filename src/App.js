import React from 'react'
import './App.css'
import DynamicValues from './components/latian youtube/Dynamic_values'
import Navbar from './components/navbar/navbar'
import ClickEvent from './components/latian youtube/Click_event'
import StateMan from './components/latian youtube/State'


function App() {
  
  // const [ text,setText ] = useState("asdasd")
  return (
    <div>
      <Navbar/>
      <DynamicValues/>
      <ClickEvent/>
      <StateMan/>
    </div>
  )
}

export default App;
