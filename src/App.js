import React from 'react'
import './App.css'

import Feed from './components/Design/Feed'
import Navbar from './components/Design/Navbar'
import Rightbar from './components/Design/Rightbar'
import Sidebar from './components/Design/Sidebar'

function App() {
  return (
    <div>
      <Navbar />
      <Feed />
      <Rightbar />
      <Sidebar />
    </div>
  )
}

export default App;
