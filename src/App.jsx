import { useState } from 'react'
import './App.css'
import { Outlet } from 'react-router-dom'
import Footer from './Pages/Footer'
import NavBar from './Pages/NavBar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <header>
        <NavBar></NavBar>
      </header>
      <main className='w-11/12 mx-auto'>
        <Outlet></Outlet>
      </main>
      <footer>
        <Footer></Footer>
      </footer>
    </div>
  )
}

export default App
