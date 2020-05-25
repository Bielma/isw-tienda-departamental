import React, { Component } from 'react';
import Header from './Header.js';
import Footer from './Footer.js';
import SignIn from './SignIn.js';

class Home extends Component {
    render() {
        return (
            
            <div id="home">
                <Header/>
                <div className = "center">                                    
                    <div id="content " >
                        <h1 className="subheader"> Hola </h1>
                    </div>
                </div>
                <SignIn/>
            </div>
        );
    }


}

export default Home;