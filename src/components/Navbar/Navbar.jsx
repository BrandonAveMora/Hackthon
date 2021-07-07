import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Nav } from 'react-bootstrap'

import './Navbar.css'

export default class NavbarComponent extends Component{
    render(){
        return(
            <>
            <div class="container">
            <Nav className="justify-content-center " justify = "true" activeKey="/">
                <Nav.Item>
                    <Link className = "" to = "/store">
                        <img src="https://i.ibb.co/jZCtTgd/ofertas-icon.png" alt="ofertas-icon" border="0"/>
                        OFERTAS
                    </Link>
                </Nav.Item>

                <Nav.Item>
                    <Link className = "" to = "/store">
                        <img src="https://i.ibb.co/cL01PkG/tienda-icon.png" alt="tienda-icon" border="0"/>
                        TIENDA
                    </Link>
                </Nav.Item>

                <Nav.Item>
                    <Link className = "" to = "/maps">
                        <img src="https://i.ibb.co/C0Sf955/puntos-icon.png" alt="puntos-icon" border="0"/>  
                        PUNTOS DE VENTA
                    </Link>
                </Nav.Item>

                <Nav.Item>
                    <Link className = "" to = "/">
                    <img src="https://i.ibb.co/cCBGVPZ/Imagen1.png" alt="Imagen1" border="0" width = "64" heigth = "64"/>
                    </Link>
                </Nav.Item>

                <Nav.Item>
                    <Link className = "" to = "/">
                        <img src="https://i.ibb.co/P15Tydb/deseos-icon.png" alt="deseos-icon" border="0"/>
                        LISTA DE DESEOS
                    </Link>
                </Nav.Item>

                <Nav.Item>
                    <Link className = "" to = "/">
                        <img src="https://i.ibb.co/z6qS0PY/carrito-icon.png" alt="carrito-icon" border="0"/>
                        CARRITO
                    </Link>
                </Nav.Item>

                <Nav.Item>
                    <Link className = "" to = "/">
                        <img src="https://i.ibb.co/2cFKs6d/usuario-icon.png" alt="usuario-icon" border="0"/>
                        CUENTA
                    </Link>
                </Nav.Item>
            </Nav>
            </div>
            </>
        )
    }
}