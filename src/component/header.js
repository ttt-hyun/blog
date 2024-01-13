// import Bulbsvg from './bulbsvg';
function Header(){
    return (
        // <header>
        //     <div className="max-grid ml-auto mr-auto">
        //         <div className="head-content bento-box pd-10 prim-shadow flex-box justify-content-end">
        //             <button className="theme-btn prim-btn prim-shadow align-items-center justify-content-center" onClick={() => handleChange()}>
        //                 <div className='bright-effect'></div>
        //                 <Bulbsvg />
        //             </button>
        //         </div>
        //     </div> 
        // </header>
        <header>
            <div className='header-wrapper flex-box align-items-center justify-content-center'>
                <div className='header-inner max-grid'>
                    <div className='header-contents flex-box justify-content-center'>
                        <div className='title-box rd10 prim-shadow flex-center'>
                            <h1 className="fs14 fw800 default-clr">Blog</h1>
                        </div>
                        <button className='menu-button prim-btn sz5 prim-shadow flex-center'>
                            <div className='menu-box flex-box flex-column justify-content-between'>
                                <p className='menu-path text-zero'>선</p>
                                <p className='menu-path text-zero'>선</p>
                                <p className='menu-path text-zero'>선</p>
                            </div>
                        </button>
                    </div>
                </div>
            </div>
        </header>
    )
}

export {Header};
