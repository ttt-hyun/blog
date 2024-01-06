//import bolb from '../img/lightbulb.svg'
import Bulbsvg from './bulbsvg';
function Header({handleChange, isChecked}){
    return (
        <header>
            <div className="max-grid ml-auto mr-auto">
                <div className="head-content bento-box pd-10 prim-shadow flex-box justify-content-end">
                    <button className="theme-btn prim-btn prim-shadow align-items-center justify-content-center" onClick={() => handleChange()}>
                        <div className='bright-effect'></div>
                        <Bulbsvg />
                    </button>
                </div>
            </div> 
        </header>
    )
}

export {Header};
