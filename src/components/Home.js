import React, { Component } from 'react';
import Header from './Header.js';
import Footer from './Footer';

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
            </div>
        );
    }


}

export default Home;