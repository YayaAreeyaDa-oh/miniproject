import React from 'react';
import Logo from './img/d2.png'

const Navigator = () =>{
    return (
        <div >
            <nav class="navbar navbar-expand-lg navbar-dark bg-dark" >
                <a class="navbar-brand" href="./index.html">
                    <img src={Logo} alt="Logo" width="30" height="30" class="d-inline-block align-top" alt=""/>
                    Diary
                </a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div class="navbar-nav">
                        <a class="nav-item nav-link active" href="./index.html">Home <span class="sr-only">(current)</span></a>
                        <a class="nav-item nav-link" href="#">Features</a>
                        <a class="nav-item nav-link" href="#">Contact</a>
                        <a class="nav-item nav-link" href="#">About</a>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navigator;