import './App.css';
import logo from './assets/images/logo.jpg';
import contentBackground from './assets/images/steampunk.jpg';


function App() {

    return (
        <div className="App-wrapper">
            <header className='header'>
                <img src={logo} alt='logo'/>
            </header>
            <nav className='nav'>
                <div>
                    Profile
                </div>
                <div>
                    Messages
                </div>
            </nav>
            <div className='content'>
                <img src={contentBackground} alt="img"/>
                Main Content
            </div>
        </div>
    );
}

export default App;
