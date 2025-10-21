import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import UserAlbumsFullStack from './UserAlbums'
import UserFullCrude from './UserFullCrude'

function App() {
  

  return (
    <>
    {/* il componente è messo tra div con il className = App */}
      <div className='App'><UserFullCrude/></div>
    
    </>
  )
}

export default App
