import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Nav } from 'react-bootstrap'

import './Navbar.css'

export default class NavbarComponent extends Component{
    render(){
        return(
            <>
            <Nav className="justify-content-center align-items-center" justify = "true" activeKey="/">

                <Link className="nav-item" to = "/store">
                    <Nav.Item className="">
                        <div className="h-100">
                            <img src="https://i.ibb.co/jZCtTgd/ofertas-icon.png" alt="ofertas-icon" border="0"/>
                            <span>OFERTAS</span>
                        </div>
                    </Nav.Item>
                </Link>

                <Link className = "nav-item" to = "/store">
                    <Nav.Item className="">
                        <div className="h-100">
                            <img src="https://i.ibb.co/cL01PkG/tienda-icon.png" alt="tienda-icon" border="0"/>
                            <span>TIENDA</span>
                        </div>
                    </Nav.Item>
                </Link>

                <Link className = "nav-item" to = "/maps">
                    <Nav.Item className="">
                        <div className="h-100">
                            <img src="https://i.ibb.co/C0Sf955/puntos-icon.png" alt="puntos-icon" border="0"/>  
                            <span>PUNTOS DE VENTA</span>
                        </div>
                    </Nav.Item>
                </Link>

                <Link className = "nav-logo" to = "/">
                    <Nav.Item className="">
                        <div className="h-100">
                            <img src="https://i.ibb.co/cCBGVPZ/Imagen1.png" alt="Imagen1" border="0" width = "64" heigth = "64"/>
                        </div>
                    </Nav.Item>
                </Link>

                <Link className = "nav-item" to = "/">
                    <Nav.Item className="">
                        <div className="h-100">
                            <img src="https://i.ibb.co/P15Tydb/deseos-icon.png" alt="deseos-icon" border="0"/>
                            <span>LISTA DE DESEOS</span> 
                        </div>
                    </Nav.Item>
                </Link>

                <Link className = "nav-item" to = "/">
                    <Nav.Item className="">
                        <div className="h-100">
                            <img src="https://i.ibb.co/z6qS0PY/carrito-icon.png" alt="carrito-icon" border="0"/>
                            <span>CARRITO</span> 
                        </div>
                    </Nav.Item>
                </Link>

                <Link className = "nav-item" to = "/">
                    <Nav.Item className="">
                        <div className="h-100">
                            <img src="https://i.ibb.co/2cFKs6d/usuario-icon.png" alt="usuario-icon" border="0"/>
                            <span>CUENTA</span> 
                        </div>
                    </Nav.Item>
                </Link>
            </Nav>
            
            </>
        )
    }
}