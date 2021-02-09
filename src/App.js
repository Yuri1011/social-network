import './App.css';
import {Header} from "./components/Header/Header";
import {Navigation} from "./components/Navigation/Navigation";
import {Profile} from "./components/Profile/Profile";
import {Dialogs} from "./components/Dialogs/Dialogs";

function App() {

    return (
        <div className="App-wrapper">
            <Header/>
            <Navigation/>
            <div className='app-wrapper-content'>
                <Profile/>
                {/*<Dialogs/> */}
            </div>

        </div>
    );
}

export default App;
