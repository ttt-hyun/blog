import './css/App.css';
import './css/reset.css';
import './css/component.css';
import './css/utility.css';
import Sideleft from './component/layout'
import Main from './component/main'

function App() {
  return (
    <div className="wrapper">
      <Sideleft />
      <div className="container flex-box flex-column">
        <Main />
      </div>
    </div>
  );
}

export default App;
