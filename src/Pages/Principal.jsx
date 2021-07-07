import React, {Fragment, useState} from 'react';
import banner from '../img/Banner.png';
import bannerDos from '../img/Banner2.png';

import Principal from './Principal.css'
const Contador = () => {
    
    let obio = 'OBIO';

    return (
        <Fragment>
          
            <div style={{ height: 600 }}>
                <div class="hero-image">
                    <img src="" alt=''/>
                    <div class="mt-5 p-5">
                        <pre>
                        <h1>ES {obio} Y ES JUSTO</h1>
                        <h1>ES {obio} RESPETAR EL ENTORNO</h1>
                        <h1>ES {obio} SER NATURAL</h1>
                        <h1>ES {obio} Y ES ORGÁNICO</h1>
                        </pre>
                    </div>
                    
                </div>
                
            </div>

            <div class="d-flex justify-content p-5 ms-2 mt-4">
                <div>  {/*  1   */}
                    <div class="content-center">
                        <img src="https://sc04.alicdn.com/kf/Hfe6f8e4615ae4f0e88817e8656da500fX.jpg" alt="café"></img>
                    </div>
                    <div>
                        <h3>Café</h3>
                        <h4>$140</h4>
                        <button>Agregar al carrito</button>
                    </div>
                </div>

                <div>  {/*  2   */}
                    <div class="content-center">
                        <img src="https://sc04.alicdn.com/kf/Hfe6f8e4615ae4f0e88817e8656da500fX.jpg" alt="café"></img>
                    </div>
                    <div>
                        <h3>Café</h3>
                        <h4>$140</h4>
                        <button>Agregar al carrito</button>
                    </div>
                </div>

                <div>  {/*  3   */}
                    <div class="content-center">
                        <img src="https://sc04.alicdn.com/kf/Hfe6f8e4615ae4f0e88817e8656da500fX.jpg" alt="café"></img>
                    </div>
                    <div>
                        <h3>Café</h3>
                        <h4>$140</h4>
                        <button>Agregar al carrito</button>
                    </div>
                </div>

                <div>  {/*  4   */}
                    <div class="content-center">
                        <img src="https://sc04.alicdn.com/kf/Hfe6f8e4615ae4f0e88817e8656da500fX.jpg" alt="café"></img>
                    </div>
                    <div>
                        <h3>Café</h3>
                        <h4>$140</h4>
                        <button>Agregar al carrito</button>
                    </div>
                </div>

                <div>  {/*  5   */}
                    <div class="content-center">
                        <img src="https://sc04.alicdn.com/kf/Hfe6f8e4615ae4f0e88817e8656da500fX.jpg" alt="café"></img>
                    </div>
                    <div>
                        <h3>Café</h3>
                        <h4>$140</h4>
                        <button>Agregar al carrito</button>
                    </div>
                </div>
            </div>
 
            <div style={{ height: 600 }}>
                <div class="hero-image-dos">
                    <img src="" alt=''/>
                </div>
            </div>
            
        </Fragment>
    );
}

export default Contador;
