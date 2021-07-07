import React, {Fragment, useState} from 'react';
import banner from '../img/Banner.png';

import Principal from './Principal.css'
const Contador = () => {
    


    return (
        <Fragment>
          
            <div class="d-flex justify-content-center mt-5 ">
                <div>
                    <img src={banner} alt='Obio'/>
                </div>
            </div>

            <div class="d-flex justify-content-center p-3 mt-4">
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
            </div>

            {/*<div class="d-flex justify-content bg-warning">*/}
            
            
                <div class="container">
                    <img src="" alt=""/>
                    <div class=" mt-3">

                    </div>
                </div>
            
        </Fragment>
    );
}

export default Contador;
