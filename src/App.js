
import { useState } from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Header} from './component/header';
import {Sidebar} from './component/sidebar';
import {Post} from './pages/post';


function App() {
    const [isDark, setDarkMode] = useState(false);
    const toggleDarkMode = () => {
        setDarkMode(!isDark);
    }

    return (
        <div className="wrapper" data-theme={isDark ? 'dark' : 'light'}>
            <Header/>
            <main>
                <div className='main-inner'>
                    <div className='flex-box gap-10 max-grid ml-auto mr-auto'>
                        <BrowserRouter>
                            <Sidebar isChecked={isDark} handleChange={toggleDarkMode} />
                            <Routes>
                                <Route path="/blog/post" element={<Post />} />
                            </Routes>
                        </BrowserRouter>
                    </div>
                </div>
            </main>
        </div>
    );
}

export default App;
