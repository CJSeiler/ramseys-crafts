import { Outlet } from "react-router-dom"
import Navbar from "./Components/Navbar"
import Footer from "./Components/Footer"
import './App.css'

function App() {
  return (
    <div className="App-container">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  )
}

export default App;
