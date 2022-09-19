import Header from "./Components/Header"
import Menu from "./Components/Menu"
import Favorite from "./Components/Favorite"
import craft from "./images/craft.jpg"
import favoriteData from "./favoriteData"

import {useState} from "react"
// import './Menu.css';
import './App.css';

function App() {
  const [isMenuShown, setIsMenuShown] = useState(false)
  const favoriteElements = favoriteData.map(favorite => {
    const {id, image, title, description} = favorite

    return (
      <Favorite
        key={id} 
        image={image}
        title={title}
        description={description}
      />
    )
  })

  return (
    <div className="App-container">
      <Header handleClick={() => setIsMenuShown(!isMenuShown)}/>
      {<Menu show={isMenuShown}/>}

      <h3 className="app-banner">Shop our favorites!</h3>

      <main>
        <div className="main-favorite-cards">
          {favoriteElements}
        </div>

        <div className="main-about">
          <h3 className="main-about-subheading">About</h3>
          <img className="main-about-image"src={craft} alt="yarn layed out on a desk" />
          <p className="main-about-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis 
            nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu 
            fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in 
            culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>
      </main>
    </div>
  );
}

export default App;
