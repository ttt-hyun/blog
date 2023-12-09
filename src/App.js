import {Header, Sideleft} from './component/layout';
import Main from './component/main';
import useLocalStorage from "use-local-storage";
import { useState } from 'react';


function App() {
  const [isDark, setDarkMode] = useState(false);
  const toggleDarkMode = () => {
    setDarkMode(!isDark)
    console.log('working toggle');
  }

  return (
    <div className="wrapper" data-theme={isDark ? 'dark' : 'light'}>
      <Header isChecked={isDark} handleChange={toggleDarkMode} />
      <Sideleft />
      <div className="container flex-box flex-column">
        <Main />
      </div>
    </div>
  );
}

export default App;
