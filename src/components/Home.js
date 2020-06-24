import React, { Component } from 'react';
import Header from './Header.js';
import Footer from './Footer.js';
import SignIn from './SignIn.js';

class Home extends Component {
    render() {
        return (
            
            <div id="home">
                <Header user = {{puesto: ''}}/>
                <div className = "center">                                    
                    <div id="content " >                   
                        <h1>Bienvenido UwU</h1>
                        <p> </p>
                        <p> </p>
                        <p> </p>
                        <p> </p>
                        <p> </p>
                    </div>
                    
                    <Footer/>
                </div>
               
            </div>
        );
    }


}

export default Home;