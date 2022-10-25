import { Outlet } from "react-router-dom"
import { useState } from "react"
import Menu from "./Components/Menu"
import Navbar from "./Components/Navbar"
import Footer from "./Components/Footer"
import './App.css'

function App() {
  const [isMenuShown, setIsMenuShown] = useState(false)
  return (
    <div className="App-container">
      <Navbar handleClick={() => setIsMenuShown(!isMenuShown)} />
      {<Menu show={isMenuShown}/>}
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
