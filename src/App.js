import logo from './logo.svg';
import './App.css';
import Icon from './AppIcon.jpg'
import download from './download.png'
{/* <img src={logo} className="App-logo" alt="logo" />


<a
className="App-link"
href="https://reactjs.org"
target="_blank"
rel="noopener noreferrer"
>
Learn React
</a> */}

{/* <p>
Edit <code>src/App.js</code> and save to reload.
</p> */}

function App() {
  return (
    <div className="App">
      <div className="App-Container">
          <img src={Icon} className="App-Icon" alt="logo" />
          <h1>Spid</h1>
          <h3>VIDEO SPEED EDITOR</h3>
          <h4>Slow Motion & Speed Up</h4>
          <a href="https://www.google.com">
            <img src={download} className="download" alt="download from app store" />
          </a>
          <div className="bottom-area">
            <h4>Contact Email: spid.video.edit@gmail.com</h4>
          </div>
      </div>

    </div>
  );
}

export default App;
