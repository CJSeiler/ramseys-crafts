import { Outlet } from "react-router-dom"
import Footer from "./Components/Footer"
import './App.css'
import 'react-toastify/dist/ReactToastify.css'

function App() {
  return (
    <div className="App-container flex">
      <Outlet />
      <Footer />
    </div>
  )
}

export default App;
