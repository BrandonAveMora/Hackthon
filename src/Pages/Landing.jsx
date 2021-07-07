import React, { Component } from 'react'
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';

export default class Landing extends Component{
    render(){
        return(
            <>
            <Container className="p-4">
                <Jumbotron className = "">
                <div class="d-flex justify-content-center">
                    <div class="p-2">
                        Texto
                    </div>
                    <div class="p-2">
                        Imagen
                    </div>
                </div>
                </Jumbotron>
            </Container>
            </>
        )
    }
}