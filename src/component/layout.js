//import bolb from '../img/lightbulb.svg'
import Bulbsvg from './bulbsvg';
function Header({handleChange, isChecked}){
    
    return (
        <header>
            <div className="max-grid ml-auto mr-auto">
                <div className="head-content flex-box justify-content-end">
                    <button className="theme-btn prim-btn prim-shadow align-items-center justify-content-center" onClick={() => handleChange()}>
                        <div className='bright-effect'></div>
                        <Bulbsvg />
                    </button>
                </div>
            </div> 
        </header>
    )
}
function Sideleft(){
    return (
        <div className="utilbar prim-shadow flex-box align-items-center justify-content-center flex-column gap-5">
            <button className="prim-btn prim-shadow"></button>
            <button className="prim-btn prim-shadow"></button>
            <button className="prim-btn prim-shadow"></button>
            <button className="prim-btn prim-shadow"></button>
        </div>
    )
};

function Floatani(){
    return (
        <div className='float-ani'>
            <div class="float-line"></div>
        </div>
    )
}

export {Header, Sideleft, Floatani};
