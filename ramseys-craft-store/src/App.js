import { Outlet } from "react-router-dom"
import {useState} from "react"
import Header from "./Components/Header"
import Menu from "./Components/Menu"
import './App.css'

function App() {
  const [isMenuShown, setIsMenuShown] = useState(false)
  return (
    <div className="App-container">
      <Header handleClick={() => setIsMenuShown(!isMenuShown)} />
      {<Menu show={isMenuShown}/>}
      <Outlet />
    </div>
  );
}

export default App;
