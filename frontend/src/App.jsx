import { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import Modal from "./Components/Modal";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import "./App.css";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  const [showModal, setShowModal] = useState(true);

  useEffect(() => {
    if (JSON.parse(localStorage.getItem("isNoticeAccepted"))) {
      setShowModal(false);
    }
  }, []);

  return (
    <div className="app__container">
      {showModal ? 
        <Modal showModal={showModal} setShowModal={setShowModal} /> 
      : 
        ""
      }
      
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default App;
