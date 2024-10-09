import logo from './logo.svg';
import './App.css';
import { createContext,useState } from 'react';
import ReactSwitch from 'react-switch';
export const ThemeContext = createContext(null);

function App() {
  const [theme,setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((curr) => (curr === "light" ? "dark"  : "light"));
  };

  return (
    <ThemeContext.Provider value={{theme,toggleTheme}}>
    <div className="App" id={theme} >
    
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
        <label>{theme === "light" ? "Light Mode" : "Dark Mode"}</label>
        </p>
        <a
          className="App-link"
          href="https://gallbox.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
         GallBox
        </a>
        <div className="switch">
        
    <ReactSwitch  onChange={toggleTheme} checked={theme === "dark"}/>
    </div>
      </header>
    </div>
    </ThemeContext.Provider>

  );
}

export default App;
