import {Header} from './component/layout';
import { useState } from 'react';


function App() {
  const [isDark, setDarkMode] = useState(false);
  const toggleDarkMode = () => {
    setDarkMode(!isDark);
  }

  return (
    <div className="wrapper" data-theme={isDark ? 'dark' : 'light'}>
      <Header isChecked={isDark} handleChange={toggleDarkMode} />
      <div className="container flex-box flex-column">
      </div>
    </div>
  );
}

export default App;
