import React, {} from 'react'
import './App.css'
import Article from './components/article/article';
import Navbar from './components/navbar/navbar';


function App() {
  
  // const [ text,setText ] = useState("asdasd")
  return (
    <div>
      <Navbar/>
      <Article />
    </div>
  )
}

export default App;
