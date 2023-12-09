//import bolb from '../img/lightbulb.svg'
import Bulbsvg from './bulbsvg';
function Header({handleChange, isChecked}){
    
    return (
        <header>
            <div className="max-grid ml-auto mr-auto">
                <div className="head-content flex-box justify-content-end">
                    <button className="theme-btn prim-btn prim-shadow align-items-center justify-content-center" onClick={() => handleChange()}>
                        <Bulbsvg />
                    </button>
                </div>
            </div> 
        </header>
    )
}
function Sideleft(){
    return (
        <div className="utilbar prim-shadow flex-box align-items-center justify-content-center gap-5">
            <button className="prim-btn prim-shadow"></button>
            <button className="prim-btn prim-shadow"></button>
            <button className="prim-btn prim-shadow"></button>
            <button className="prim-btn prim-shadow"></button>
        </div>
    )
};

export {Header, Sideleft};
