import hamburger from "../icons/hamburger.png"

export default function Header(props) {
    
    return (
        <header className="App-header">
            <div className="App-header-nav">
                <p>logo</p>
                <img className="heading-hamburger" 
                    src={hamburger} 
                    alt="menu icon" 
                    onClick={props.handleClick}
                />
            </div>

            <div className="app-heading-banner">
                <h1 className="app-heading">Ramsey's Crochet Corner</h1>
                <p>Home for all your cold weather needs!</p>
            </div>
        </header>
    )
}