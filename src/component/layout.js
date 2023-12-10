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
function randomText(){
    const text = ('$()+=></!*&%CRE');
    var letter = text[Math.floor(Math.random() * text.length)];
    return letter;
}
function rain(){
    let cloud = document.querySelector('.float-ani');
    let e = document.createElement('div');
    let left = Math.floor(Math.random() * 200);
    let top = Math.floor(Math.random() * 40);
    let size = ((Math.random() * 12) + 10) * 0.1;
    e.classList.add('drop');
    cloud.appendChild(e);
    e.innerText = randomText();
    e.style.left = left + 'px';
    e.style.top = (-200 + top) + 'px';
    e.style.fontSize = size + 'rem';
    
    setTimeout(function(){
        cloud.removeChild(e)
    }, 2000)
}
setInterval(function(){
    rain()
    rain()
}, 50);

export {Header, Sideleft, Floatani};
