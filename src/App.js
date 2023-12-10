import {Header, Sideleft, Floatani} from './component/layout';
import Main from './component/main';
import useLocalStorage from "use-local-storage";
import { useState } from 'react';


function App() {
  const [isDark, setDarkMode] = useState(false);
  const toggleDarkMode = () => {
    setDarkMode(!isDark);
  }

  return (
    <div className="wrapper" data-theme={isDark ? 'dark' : 'light'}>
      <Floatani />
      <Header isChecked={isDark} handleChange={toggleDarkMode} />
      <Sideleft />
      <div className="container flex-box flex-column">
        <Main />
      </div>
    </div>
  );
}

export default App;
