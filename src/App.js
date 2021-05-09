import './App.css';
import logo from './logo.png';

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <h1>
                    Learn <span className="highlight">with </span>Sumit
                </h1>

                <a
                    className="App-link"
                    href="https://www.youtube.com/channel/UCFM3gG5IHfogarxlKcIHCAg"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    View Channel
                </a>
            </header>
        </div>
    );
}

export default App;
