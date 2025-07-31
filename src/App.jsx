import { Outlet } from 'react-router-dom'
import Navbar from './components/Header/Navbar'
import Footer from './components/Footer/Footer'

function App() {

  return (
    <>
    <Navbar/>
    <div className='min-h-[100vh] bg-gray-100'>

      <Outlet/>
    </div>
      <Footer/>
    </>
  )
}

export default App
