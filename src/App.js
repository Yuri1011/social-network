import './App.css';
import contentBackground from './assets/images/steampunk.jpg';

function App() {

    return (
        <div className="App-wrapper">
            <header className='header'>
            </header>
            <nav className='nav'>
                <div>
                    <a href="#">Profile</a>
                </div>
                <div>
                    <a href="#">Messages</a>
                </div>
                <div>
                    <a href="#">News</a>
                </div>
                <div>
                    <a href="#">Music</a>
                </div>
                <div>
                    <a href="#">Settings</a>
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
