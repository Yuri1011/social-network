import './App.css';
import contentBackground from './assets/images/steampunk.jpg';

function App() {

    return (
        <div className="App-wrapper">
            <header className='header'>
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
